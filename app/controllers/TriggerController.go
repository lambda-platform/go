package controllers

import (
	"fmt"
	"lambda/lambda/models/form/formModels"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/lambda-platform/lambda/DB"
)

func StoriesAfterUpdate(newData interface{}) {
	stories := newData.(*formModels.Stories83)

	if stories.AudioURL != "" {
		projectRoot, _ := os.Getwd()

		// Adjust path construction based on your project structure
		// Assuming AudioURL starts with "/" like "/storage/..."
		relPath := stories.AudioURL
		if strings.HasPrefix(relPath, "/") {
			relPath = relPath[1:]
		}

		audioFullPath := filepath.Join(projectRoot, "public", relPath)

		if _, err := os.Stat(audioFullPath); os.IsNotExist(err) {
			fmt.Printf("Audio file not found: %s\n", audioFullPath)
			return
		}

		dir := filepath.Dir(audioFullPath)
		baseName := filepath.Base(audioFullPath)
		ext := filepath.Ext(baseName)
		fileNameWithoutExt := strings.TrimSuffix(baseName, ext)

		jsonFullPath := filepath.Join(dir, fileNameWithoutExt+".json")
		srtFullPath := filepath.Join(dir, fileNameWithoutExt+".srt")

		// 1. Run whisperx
		fmt.Println("Running whisperx...")
		cmdWhisper := exec.Command("whisperx",
			audioFullPath,
			"--language", "en",
			"--output_format", "json",
			"--device", "cpu",
			"--compute_type", "float32",
			"--vad_method", "silero",
			"--output_dir", dir,
		)
		// It's helpful to inherit stdout/stderr for debugging in logs
		cmdWhisper.Stdout = os.Stdout
		cmdWhisper.Stderr = os.Stderr

		if err := cmdWhisper.Run(); err != nil {
			fmt.Printf("Error running whisperx: %v\n", err)
			return
		}

		// 2. Run python script
		fmt.Println("Running make_capcut_voice_srt.py...")
		scriptPath := filepath.Join(projectRoot, "make_capcut_voice_srt.py")
		cmdPython := exec.Command("python3", scriptPath, jsonFullPath, srtFullPath)
		cmdPython.Stdout = os.Stdout
		cmdPython.Stderr = os.Stderr

		if err := cmdPython.Run(); err != nil {
			fmt.Printf("Error running python script: %v\n", err)
			return
		}

		// 3. Update Database
		// Constuct the new relative srt path (preserving the original relative structure)
		// e.g. /storage/audio.mp3 -> /storage/audio.srt
		newSrtURL := strings.TrimSuffix(stories.AudioURL, ext) + ".srt"

		fmt.Printf("Updating SrtURL to: %s\n", newSrtURL)

		// Use UpdateColumn to avoid triggering hooks again if necessary, or just simple Save
		// Using DB.DB directly
		result := DB.DB.Model(&formModels.Stories83{}).
			Where("id = ?", stories.ID).
			Update("srt_url", newSrtURL)

		if result.Error != nil {
			fmt.Printf("Error updating database: %v\n", result.Error)
		}
	}
}

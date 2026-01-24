import json
import sys

def srt_time(t):
    h = int(t // 3600)
    m = int((t % 3600) // 60)
    s = int(t % 60)
    ms = int(round((t - int(t)) * 1000))
    return f"{h:02}:{m:02}:{s:02},{ms:03}"

if len(sys.argv) < 3:
    print("Usage: python make_capcut_voice_srt.py <input_json> <output_srt>")
    sys.exit(1)

input_file = sys.argv[1]
output_file = sys.argv[2]

with open(input_file, "r", encoding="utf-8") as f:
    data = json.load(f)

i = 1
out = []

for seg in data["segments"]:
    for w in seg.get("words", []):
        word = w["word"].strip()
        if not word:
            continue
        out.append(
            f"{i}\n"
            f"{srt_time(w['start'])} --> {srt_time(w['end'])}\n"
            f"{word}\n"
        )
        i += 1

with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(out))

print(f"✅ {output_file} created (CapCut-ready)")

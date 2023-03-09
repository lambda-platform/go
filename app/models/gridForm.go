package models

type GridFormExampleRequestData []struct {
	RowIndex int `json:"rowIndex"`
	Data     struct {
		ID      int    `json:"id"`
		Name    string `json:"name"`
		Price   string `json:"price"`
		Tailbar string `json:"tailbar"`
	} `json:"data"`
}

package models


type Response struct {
    Total int `json:"total"`
    Row   []struct {
        Court       string `json:"court"`
        HeregIndex  string `json:"hereg_index"`
        SupNumber   string `json:"sup_number"`
        SupDate     string `json:"sup_date"`
        AnhanNumber string `json:"anhan_number"`
        AnhanDate   string `json:"anhan_date"`
        AnhanId     string `json:"anhan_id"`
    } `json:"row"`
}



type ResponseFull struct {
    ID          string `json:"id"`
    AnhanDate   string `json:"anhan_date"`
    AnhanNumber string `json:"anhan_number"`
    Question    string `json:"question"`
    Decision    string `json:"decision"`
}

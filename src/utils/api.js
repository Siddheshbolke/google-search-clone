import axios from "axios";

const BASE_URL ="https://www.googleapis.com/customsearch/v1"

const params={
    key:'AIzaSyAwNPOVt_Fz15QpHdKW7GmeCbXvCwmd4_4',
    cx:'6682bf63d64254218'
}
export const fetchDataFromApi = async (payload) => {
    const {data}=await  axios.get(BASE_URL,{
        params:{...params,...payload}
    });
    return data;

};

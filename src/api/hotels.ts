import axios from "axios";

const apiKey=process.env.REACT_APP_API_KEY
console.log(apiKey)
export const getAllHotels=()=> axios({
    method: 'get',
   
    url: 'https://cors-anywhere.herokuapp.com/https://sandbox.impala.travel/v1/hotels?start=2021-06-03&end=2021-06-05',
    params:{},
    headers:{"X-API-KEY":`${apiKey}`,
    "access-control-allow-origin": "*",
    'Content-Type': 'application/json; charset=utf-8',
      
 }
   
  })
  

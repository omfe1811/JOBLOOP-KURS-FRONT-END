import {API_URL}from "../config.js";
export const  fetchCatFactsButton=()=>{
const buttonElement=document.createElement("button");
buttonElement.textContent="Fetch Cat Facts";
buttonElement.addEventListener("click", async ()=>{
    const response =await fetch(`${API_URL}/facts`);
    console.log(await response.json());
})
return buttonElement;
};
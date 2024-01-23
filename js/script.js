import { validation } from "./functions.js";
const button = document.getElementById("button");
const Inputname = document.getElementById("Inputname");
const inputNarx = document.querySelector("#inputNarx");
const inputCategory = document.querySelector("#inputCategory");
const img = document.querySelector("#img");
const sana = document.querySelector("#sana");
const color = document.querySelector("#color");
const tasnif = document.querySelector("#tasnif");
const mainScren = document.querySelector("#mainScren");
const form = document.querySelector("#form");


button  && button.addEventListener('click', function (event) {
  event.preventDefault();
  if (validation({Inputname, inputNarx, inputCategory,img, sana,color, tasnif})) {
    
  } else {
    console.log("validatsiyadan o'tmadi.");
  }
});

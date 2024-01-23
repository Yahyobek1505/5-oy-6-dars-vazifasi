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
  if (validation({Inputname, inputNarx, inputCategory,img, sana, color, tasnif})) {
    let car = {
       name: Inputname.value,
       narx: inputNarx.value,
       year: sana.value,
       img: img.value,
       color: color.value,
       tasnif: tasnif.value,
       category: inputCategory.value,
       status: 'active',
       id: Date.now()
    }
    let data = getData();x
    data.push(car);
    localStorage.setItem('cars', JSON.stringify(data));
    form.reset();


    function getData() {
      let data = [];
      if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
      }
      return data;
    }
  } else {
    console.log("validatsiyadan o'tmadi.");
  }
});

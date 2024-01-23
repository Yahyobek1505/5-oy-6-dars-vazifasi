import { validation, getData } from "./functions.js";
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

function newCard(car) {
  return `
        <div class="border row mt-5 p-4">
          <div class="col-3">
            <img
              width="200"
              height="150"
              src="${car.img}"
              alt="" />
          </div>
          <div class="col-9">
            <div class="title d-flex justify-content-between">
              <h1>${car.name}</h1>
              <button about_id = 'more_${car.id}' class="btn btn-primary more">Batafsil</button>
            </div>
            <div class="intro">
              <div class="row">
                <div class="col-6">
                  <h3>${car.category}</h3>
                  <h4>${car.narx}$</h4>
                </div>
                <div class="col-6">
                  <h4>${car.year}</h4>
                  <h4>${car.color}</h4>
                  </div>
                  </div>
                  
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam optio placeat iure distinctio similique.
                  </p>
                  <span class="btn btn-success">${car.status}</span>
            </div>
          </div>
        </div>
  `
}

button  && button.addEventListener('click', function (event) {
  event.preventDefault();
  if (validation({Inputname, inputNarx, inputCategory,img, sana, color, tasnif})) {
    let car = {
       name: Inputname.value,
       narx: inputNarx.value,
       year: sana.value,
       img: img.value,
       category: inputCategory.value,
       color: color.value,
       tasnif: tasnif.value,
       status: 'active',
       id: Date.now()
    }
    
    let data = getData();
    data.push(car);
    localStorage.setItem('cars', JSON.stringify(data));
    let card = newCard(car);
    mainScren.innerHTML += card;
    form.reset();
  } else {
    console.log("validatsiyadan o'tmadi.");
  }
});


document.addEventListener("DOMContentLoaded", function () {
    let cars = getData();
    cars.length && cars.forEach(car => {
      let card = newCard(car);
      mainScren.innerHTML += card;
    });

    let infoButons = document.querySelectorAll('button.more') 
     infoButons.length && infoButons.forEach(more => {
      more && more.addEventListener('click', function () {
        let id = this.getAttribute('about_id').substring(5);
        
      let urlManzil = window.location.href.substring(0, window.location.href.search('index'));
      window.location.assign(`${urlManzil}about/about.html?id=${id}`)
      })
     }) 
  })

import { getData } from "./functions.js";

const Inputname = document.getElementById("name");
const inputNarx = document.querySelector("#narx");
const inputCategory = document.querySelector("#type");
const img = document.querySelector("#img");
const sana = document.querySelector("#sana");
const color = document.querySelector("#color");
const tasnif = document.querySelector("#tasnif");
const status = document.querySelector("#status");
const del = document.querySelector("#delete");
const update = document.querySelector("#update");

let elmentId;

document.addEventListener("DOMContentLoaded", function () {
  let urlIndex = window.location.href.search("id=");
  if (urlIndex > 0) {
    elmentId = window.location.href.substring(urlIndex + 3);
    console.log(elmentId);
    if (elmentId) {
      let data = getData();
      let car = data.find((element) => {
        return element.id == elmentId;
      });
      Inputname.innerHTML = car.name;
      inputNarx.innerHTML = car.narx;
      sana.innerHTML = car.year;
      inputCategory.innerHTML = car.category;
      tasnif.innerHTML = car.tasnif;
      color.innerHTML = car.color;
      color.innerHTML = car.color;
      status.innerHTML = car.status;
      img.setAttribute('src', car.img);
    } else {
      let urlManzil = window.location.href.substring(
        0,
        window.location.href.search("about")
      );
      window.location.assign(`${urlManzil}index.html`);
    }
  } else {
    let urlManzil = window.location.href.substring(
      0,
      window.location.href.search("about")
    );
    window.location.assign(`${urlManzil}index.html`);
  }
  del &&  del.addEventListener('click', function () {
          let isdelete = confirm("Rostdan ham ushbu ma'lumotni o'chirmoqchimisz?")    
          if (isdelete) {
           
            let data = getData();
            data = data.filter(car => {
              return car.id != elmentId;
            })
    let urlManzil = window.location.href.substring(0,window.location.href.search("about"));
            localStorage.setItem('cars', JSON.stringify(data));
      window.location.assign(`${urlManzil}index.html`);

          }
  }) 
});


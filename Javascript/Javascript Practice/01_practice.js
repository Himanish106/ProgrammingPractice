// const fetch = document.querySelector(".fetch");
// const names = ["Anish", "Himanish", "Abhishek", "Nitish"];
// const search = document.querySelector(".search");
// const myForm = document.querySelector(".my-form");

// myForm.addEventListener("submit", (e) => {
//   let searchItem = document.getElementById("search-item").value.toLowerCase();
//   let namesWithA = "";
//   e.preventDefault();
//   console.log(d);
//     for (let name of names) {
//       if (name.toLowerCase().startsWith(searchItem)) {
//         namesWithA = namesWithA + name + " ";
//       }
//     }
//   fetch.innerHTML = namesWithA;
// });

const fetch = document.querySelector(".fetch");
const names = ["Anish", "Himanish", "Abhishek", "Nitish"];
const myForm = document.querySelector(".my-form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchItem = document.getElementById("search-item").value.toLowerCase();
  let namesWithA = "";
  for (let name of names) {
    if (name.toLowerCase().startsWith(searchItem)) {
      namesWithA = namesWithA + name + " ";
    }
  }
  fetch.innerHTML = namesWithA;
});

document.getElementById("search-item").addEventListener("keyup", function (e) {
  let searchItem = document.getElementById("search-item").value.toLowerCase();
  console.log(searchItem);
  let namesWithA = "";
  for (let name of names) {
    if (name.toLowerCase().startsWith(searchItem)) {
      namesWithA = namesWithA + name + " ";
    }
  }
  fetch.innerHTML = namesWithA;
});
let arr1 = [];
function displayArray() {
  const inputArray = document.getElementById("array-input").value;
  arr1 = inputArray.split(",").map(Number);

  let beforeRemove = document.querySelector(".before-remove");
  beforeRemove.innerText = arr1.join(" ");
}

// const arr1 = [-1, 10, 15, 16, 22, -9, -4, 33, 2, -11];
// const arr2 = [];
let beforeRemove = document.querySelector(".before-remove");
beforeRemove.innerHTML = arr1.join(", ");
const removeNegative = document.querySelector(".remove-negative");
let afterRemove = document.querySelector(".after-remove");
removeNegative.addEventListener("click", (e) => {
  const arr2 = arr1.filter((num) => num > 0);
  afterRemove.innerHTML = arr2.join(", ");
});

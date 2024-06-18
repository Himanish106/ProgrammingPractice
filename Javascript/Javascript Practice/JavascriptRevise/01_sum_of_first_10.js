let sum = 0;
let value = document.querySelector(".value");
let n = prompt("Enter the range");
n = Number.parseInt(n);
for (i = 0; i < n; i++) {
  sum += i;
}
value.innerHTML = sum;
console.log(sum);

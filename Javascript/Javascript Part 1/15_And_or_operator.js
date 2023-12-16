let userName = "Harshit";
let age = prompt("Please enter your age:"); // Remember prompt always takes input as a string 
if (userName[0] === "H" && age > 15) {
  console.log("I am inside if block");
} else {
  console.log("I am inside else block");
}

if (userName[0] === "H" || age > 15) {
  console.log("I am inside if block");
} else {
  console.log("I am inside else block");
}
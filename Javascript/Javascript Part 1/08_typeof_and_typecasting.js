// data types (primitive data types)
// string "harshit"
// number 2, 4, 5.6
// booleans
// undefined
// null
// BigInt
// Symbol

// typeof

let age = 22;
let firstName = "Himanish";
console.log(typeof age);
console.log(typeof firstName);

// typecasting
// Process 1
age = age + "";
console.log(typeof age); //string

let varnum = "32";
varnum = +varnum;
console.log(typeof varnum); //number

// Process 2
let num = 13;
num = String(num);
console.log(typeof num); //String

let charnum = "13";
charnum = Number(charnum);
console.log(typeof charnum); //number

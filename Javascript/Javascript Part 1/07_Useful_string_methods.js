// NOTE:- Strings are immutable

//1) trim()
let string1 = "       Himanish           ";
// Before trimming
console.log(string1.length);
// string1.trim()
// console.log(string1.length); ---> No change as strings are immutable
string1 = string1.trim();
console.log(string1);
console.log(string1.length);

//2) toUpperCase()
let string2 = "himanish";
console.log(string2.toUpperCase());

//3) toLowerCase()
let string3 = "HIMANISH";
console.log(string3.toLowerCase());

//4) slice()
let string4 = "Mahendra";
console.log(string4.slice(0));
console.log(string4.slice(0, 9));
console.log(string4.slice(0, 7));
console.log(string4.slice(6)); //ra
console.log(string4.slice(7)); //a

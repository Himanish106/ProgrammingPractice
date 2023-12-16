console.log("This is regex tutorial");
const exp = /himanish/; // This is a regular expression
console.log(exp);
console.log(exp.source);

let s = "Hi! himanish you are doing great";
// Functions to match regular expressions

// 1. exec():- This function will return an array for match else null for no match
// Case 1:
let result = exp.exec(s);
console.log(result); // ['himanish', index: 4, input: 'Hi! himanish you are doing great', groups: undefined]

// Case 2
const exp2 = /himanish/g;
let s2 = "Hi! himanish you are doing great. himanish";
let result2 = exp2.exec(s2);
console.log(result2);
// Even though I have two same words but still my output for the second match is not coming. So for that I need to set a flag. In this case we need a flag called global flag(g). We need to attach the global flag to the regex
let result3 = exp2.exec(s2);
console.log(result3); // ['himanish', index: 34, input: 'Hi! himanish you are doing great. himanish', groups: undefined]

// Case 3:- Applying a flag i which means case insensitive
const exp3 = /himanish/i;
let s3 = "Hi! hIManiSh you are doing great. HimaNisH";
let result4 = exp3.exec(s3);
console.log(result4);
let result5 = exp3.exec(s3);
console.log(result5);

// test ---> Returns true if and only if the reg is present in the given string
const exp4 = /himanish/;
let s4 = "Hi! himanish you are doing great";
console.log(exp4.test(s4)); // true

// match ---> It will return an array of results or null. Keep this in mind that this is a method that applies on the given string and not on the regex.

const exp5 = /himanish/;
let s5 = "Hi! himanish you are doing great.";
let result6 = s5.match(exp5);
console.log(result6);
const exp6 = /himanish/g;
let s6 = "Hi! himanish you are doing great. himanish";
let result7 = s6.match(exp6);
console.log(result7); // ['himanish', 'himanish']

// search: Returns the index of first match else -1. Keep this in mind that this is a method that applies on the given string and not on the regex.

const exp7 = /himanish/g;
let s7 = "Hi! himanish you are doing great. himanish";
let result8 = s7.search(exp7);
console.log(result8);

// replace: Returns new replaced string with all the replacenents wherever match is found(if no flag is applied then only the first occurence of match is replaced)

const exp8 = /himanish/g;
let s8 = "Hi! himanish you are doing great. himanish";
let result9 = s7.replace(exp8, "Gablu");
console.log(result9);

"use strict";
// declare a variable
// firstName = "Himanish";
var firstName = "Himanish"; //---> When you write "use strict"; you have to define the var and its a good practice is to do so.
// Use a variable
console.log(firstName);

// Change a value
firstName = "Mohit";
console.log(firstName);

// When you declare a variable using var, it has function-level scope or global scope, depending on where it is declared. This means that a var variable is accessible throughout the entire function in which it is declared or, if declared outside any function, it becomes a global variable accessible throughout the entire script.
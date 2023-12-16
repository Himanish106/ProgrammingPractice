// hoisting
console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction() {
  console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma";
var fullName = firstName + " " + lastName;
console.log(fullName);

console.log(this);

// When accessed in the global scope, this refers to the global object, which in a browser environment is the window object.
// The console.log(this) statement will print the window object.
// console.log(window);

// window is a global object in a browser environment that represents the browser window or tab.
// The console.log(window) statement will also print the window object, which is equivalent to the previous statement.
// console.log(myFunction);

// In JavaScript, function declarations are hoisted in their entirety.
// Even though myFunction is called before its actual declaration, it will still work due to hoisting.
// The console.log(myFunction) statement will print the definition of the myFunction function.
// console.log(fullName);

// fullName is declared but not yet assigned a value at this point.
// Since variables are hoisted with their declarations but not their assignments, fullName exists but its value is undefined.
// The console.log(fullName) statement will print undefined.
// function myFunction() { ... }

// This is a function declaration, which is hoisted in its entirety.
// The function definition is moved to the top of the scope, so it can be called from anywhere within its containing scope.
// The function does not need to be defined before it is called.
// Variable Declarations and Assignments:

// Variable declarations (e.g., var firstName, var lastName) are hoisted to the top of their scope, but their assignments remain in place.
// The assignment of "Harshit" to firstName and "Sharma" to lastName occurs in the order they are written in the code.
// fullName is then assigned the concatenated value of firstName and lastName.
// The final console.log(fullName) statement will print the concatenated value of "Harshit" and "Sharma", which is "Harshit Sharma".
// In summary, hoisting in this code example allows function declarations and variable declarations to be recognized and accessed before they are defined in the code. However, it's important to note that only the declarations are hoisted, not the assignments. Therefore, variables will be assigned undefined until their corresponding assignments are encountered during the code execution.

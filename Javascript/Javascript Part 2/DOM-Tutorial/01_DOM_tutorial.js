// get element by id.
// In a Document object model keep in mind that each and every element in it is an object

console.log(document.getElementById("Main-heading")); // <h2 id=​"Main-heading">​Manage Your Tasks​</h2>​ ---> But keep this in mind that this is not an HTML element it is an object. We can check this using console.dir

console.dir(document.getElementById("Main-heading")); // So inside it we can see there are so many key value pair in it.
console.log(typeof document.getElementById("Main-heading")); // object

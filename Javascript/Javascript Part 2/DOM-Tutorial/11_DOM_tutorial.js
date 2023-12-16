const todoSection = document.querySelector(".todo-section");
console.log(todoSection.classList); // DOMTokenList(2) ['todo-section', 'container', value: 'todo-section container']

// todoSection.classList.add("bg-dark"); // Process to add classes

// To remove classes
// todoSection.classList.remove("container");
// console.log(todoSection.classList);

// Whether a class exists or not
const ans = todoSection.classList.contains("container");
console.log(ans); // Returns true or false

// toggle:- If a particular class does not exists in my DOM then it adds the class. If it already exists then it removes the class.
// todoSection.classList.toggle("bg-dark");
// console.log(todoSection.classList);

// todoSection.classList.toggle("bg-dark");
// console.log(todoSection.classList);

// Practice
const header=document.querySelector(".header")
console.log(header.classList)

// add class
header.classList.add("bg-dark")
// Adding HTML elements to page

// innerHTML to add HTML elements
const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML)

// To change the content
// todoList.innerHTML="<li>List overrided</li>"

// To add elements
// todoList.innerHTML+="<li>Todo 2</li>"
// todoList.innerHTML+="<li>Todo 3</li>"

// When to use it and when to not :- You should never use this process to add HTML elements because it also renders the other HTML elements. You should be using it only when you have to change the content of any elements

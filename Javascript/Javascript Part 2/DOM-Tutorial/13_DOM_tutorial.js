// document.createElement:- Used to create a new element
// const newTodoItem = document.createElement("li");
// console.log(newTodoItem); // <li></li>
// Now to add content in the li tag we need to create a textnode
// const newTodoItemText = document.createTextNode("Todo2"); ---> every element of dom is an object. So instead of using this seperate method to add a text node we can use textContent property.
// newTodoItem.textContent = "Todo2";
// append
// newTodoItem.append(newTodoItemText);
// console.log(newTodoItem);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);

// prepend
// todoList.prepend(newTodoItem);

//remove
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);

// before:- prepend was being used to append element within the mentioned class above the selected element. before is used to append the element before the mentioned class
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Todo2";
const todoList = document.querySelector(".todo-list");
todoList.before(newTodoItem);
// todoList.after(newTodoItem);

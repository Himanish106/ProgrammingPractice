import render from "./render.js";
import storeProxy, { addTodo, deleteTodo, toggleCompleted } from "./store.js";
window.addEventListener("todoschange", () => {
  console.log("todoschange fired");
  render();
});
// storeProxy.todos = [];

// try to get store from local storage
const StorefromLocalStorage = JSON.parse(localStorage.getItem("store"));
if (StorefromLocalStorage?.todos.length > 0) {
  storeProxy.todos = StorefromLocalStorage.todos;
} else {
  localStorage.setItem("store", JSON.stringify(storeProxy));
  render();
}
render();

const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoTitle = todoTitleInput.value;
  const newTodo = {
    id: crypto.randomUUID(),
    title: todoTitle,
    completed: true,
  };
  addTodo(newTodo);
});
const todos = document.querySelector(".todos");
todos.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("delete-todo-button")) {
    console.log("You clicked on cross");
    const id = target.closest(".todo").dataset.id;
    // console.log(id)
    deleteTodo(id);
  }
});

todos.addEventListener("change", (e) => {
  const target = e.target;
  if (target.classList.contains("todo-checkbox")) {
    const id = target.closest(".todo").dataset.id;
    const completed = target.checked;
    toggleCompleted(id, completed);
  }
});

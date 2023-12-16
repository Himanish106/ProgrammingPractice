// The things which we were doing in our previous file we can do the same using insertAdjacentHTML. But it is always preferrable to use the previous methods

const todoList = document.querySelector(".todo-list");
//beforeend ---> Same as append
// todoList.insertAdjacentHTML("beforeend","<li>Todo2</li>");

// afterbegin ----> same as prepend
// todoList.insertAdjacentHTML("afterbegin","<li>Todo2</li>");

//beforebegin----> Same as before
// todoList.insertAdjacentHTML("beforebegin","<li>Todo2</li>");

//afterend-------> Same as after
todoList.insertAdjacentHTML("afterend", "<li>Todo2</li>");

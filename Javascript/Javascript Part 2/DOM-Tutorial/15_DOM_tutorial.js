// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "Todo2";
// const li2 = li.cloneNode(); ----> This means here we are cloning the li node but not its text content i.e. textnode. So for that we need to do deep cloning i.e. also to clone the text node.
// Deep Cloning
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);

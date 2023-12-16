// static list vs live list

const listItems = document.querySelectorAll(".todo-list li");
// console.log(listItems); // NodeList(5) [li, li, li, li, li]

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems); // NodeList(5) [li, li, li, li, li]

// Even though when we have added a new element then also we are getting a NodeList of 5 items only. This is because selecting elements using querySelector returns a static list. Even though the changes are reflected on our browser but not on the list we are getting on the console

// live list

const ulDemoLiveList = document.querySelector(".todo-list");
const selectliUnderul = ul.getElementsByTagName("li");
console.log(selectliUnderul); // HTMLCollection(6) [li, li, li, li, li, li]

// This shows what is being reflected in our browser
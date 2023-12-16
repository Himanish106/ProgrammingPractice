// Iteration of elements
const listItems = document.getElementsByClassName("list-item");
// console.log(listItems);

// Simple for loop

// for (i = 0; i < listItems.length; i++) {
// //   console.log(listItems[i]);
// // Suppose we want to apply background colour to all these elements
// let temp=listItems[i]
// temp.style.backgroundColor="red";
// }

// for of loop

let anchors = document.getElementsByTagName("a");
// for (let anchor of anchors) {
//   anchor.style.backgroundColor = "#fff";
//   anchor.style.color = "green";
//   anchor.style.fontWeight = "bold";
// }

// You cannot use forEach in iterating elements
// anchors.forEach((anchor) => {
//   anchor.style.backgroundColor = "#fff";
//   anchor.style.color = "green";
//   anchor.style.fontWeight = "bold";
// }); ---> Returns an error as you cannot use forEach in html collections.

// Now if you want to use forEach in HTML collections then you have to convert it into an array and then use it.
anchors = Array.from(anchors);
console.log(typeof anchors)
anchors.forEach((anchor) => {
  anchor.style.backgroundColor = "#fff";
  anchor.style.color = "green";
  anchor.style.fontWeight = "bold";
});

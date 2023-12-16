// Iteration in Nodelist: We know we obtain a node list when we target elements using querySelectorAll
let anchors = document.querySelectorAll("a");
console.log(anchors);

// In NodeListyou can use simple for loop,for off loop and for each loop

// Simple for loop
// for (i = 0; i < anchors.length; i++) {
//   //   console.log(anchors[i]);
//   // Suppose we want to apply background colour to all these elements
//   let temp = anchors[i];
//   temp.style.backgroundColor = "red";
// }

// for of loop
// for (let anchor of anchors) {
//   anchor.style.backgroundColor = "#fff";
//   anchor.style.color = "green";
//   anchor.style.fontWeight = "bold";
// }

// for each loop
anchors.forEach((anchor) => {
  anchor.style.backgroundColor = "#fff";
  anchor.style.color = "green";
  anchor.style.fontWeight = "bold";
});

// You can also convert a node list to an array just like we converted HTML collections into an array

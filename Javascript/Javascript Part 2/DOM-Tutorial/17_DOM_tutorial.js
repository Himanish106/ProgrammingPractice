// Receive dimensions of an element
// height width

const sectionTodo = document.querySelector(".todo-section");
const info = sectionTodo.getBoundingClientRect();
console.log(info);

// Output:

// DOMRect {x: 74.5, y: 294.890625, width: 1200, height: 435.46875, top: 294.890625, …}
// bottom
// : 
// 730.359375
// height
// : 
// 435.46875
// left
// : 
// 74.5
// right
// : 
// 1274.5
// top
// : 
// 294.890625
// width
// : 
// 1200
// x
// : 
// 74.5
// y
// : 
// 294.890625

// So basically it returns a dictionary
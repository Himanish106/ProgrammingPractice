const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Bubbling events

// child.addEventListener("click", () => {
//   console.log("Child clicked");
// });
// parent.addEventListener("click", () => {
//   console.log("parent clicked");
// });
// grandparent.addEventListener("click", () => {
//   console.log("Grandparent clicked");
// });
// document.body.addEventListener("click", () => {
//   console.log("Body clicked");
// });

// So we are seeing that whenever we are clicking the child the other 2 click events that is the parent and child is getting fired. This is known as event bubbling or event propagation. So when we are clicking on the child then the browser checks whether there is any more click events attached to its parent elements. Then the event bubble bubbles up. This is event bubbling

// Event Capturing

// child.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!! Child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!! Parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!! GrandParent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Capture !!! Body");
//   },
//   true
// );

// Event delegation--- Event delegation is a design pattern in JavaScript that allows you to handle events on multiple elements by attaching a single event listener to a common ancestor element.
grandparent.addEventListener("click", (e) => {
  console.log(e);
});

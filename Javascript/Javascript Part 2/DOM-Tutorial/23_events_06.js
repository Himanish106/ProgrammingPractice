console.log("script start !!!!!");
const allButtons = document.querySelectorAll(".my-buttons button");

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += i;
    }
    console.log(e.currentTarget.textContent, num);
  });
});

let outerVar = 0;
for (let i = 0; i <= 100000000; i++) {
  outerVar += i;
}
console.log("value of outer variable is ", outerVar);
console.log("script end !!!!!");

// Till the work in the global execution context is done the events keeps on waiting. Even handler keeps the track of all this. The event handler looks whether the work in the global execution context is performed or not. If we press the three buttons simultaneously then the three buttons keeps on waiting in a queue called a call back queue like this:

// -------------------------------------------------------------------------
// Button 1, Button 2, Button 3                                                 <------- CallBack Queue
// -------------------------------------------------------------------------

// After the work in the global execution context is done in the stack then all this buttons enter a stack called a callback stack and then it gets executed one by one in the sequence we have clicked them

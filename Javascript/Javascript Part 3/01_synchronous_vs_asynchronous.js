// Synchronous vs Asynchronous

// Javascript is by default a synchronous and single threaded language
// Synchronous example:-

// console.log("script start");

// for (let i = 1; i <= 10000; i++) {
//   console.log("Inside for loop");
// }

// console.log("script end"); // The above for loop is so big that it blocks this line of code until and unless the for loop completes. This is the synchronous behaviour of javascript

// Asynchronous Example:-

console.log("Script Start");
setTimeout(() => {
  console.log("Inside set timeout");
}, 1000);
console.log("Script End");

// Let us understand this code
// 1) At first "Script Start" gets printed in the console.
// 2) Then javascript sees that there is a function called setTimeout() which is not actually the function of javascript but is a function of web browser or API. So javascript tells the browser to return this function after 1000 ms or 1s.
// 3) Now within this 1s of time "script end" gets printed and then "Inside set timeout" gets printed.

// Let us understand step 3 in details:-
// We already know that in our javascript we have a callstack. In this callstack at first the global execution context enters. So at first in the GEC Script Start gets executed then as setTimeout() function comes it delays its callback function for 1s. Then as the Script End gets printed. Consider if 1s has been completed and still there are many more lines of code to be executed that lies in the GEC. The callback function will not get executed until and unless the GEC's work has been done and it pops out from the callstack. Till the time the GEC is executing the callback function stays in the Callback Queue. The event loop keeps a track of all these operations and as soon as the GEC gets empty event loop sends the callback function into the callstack.

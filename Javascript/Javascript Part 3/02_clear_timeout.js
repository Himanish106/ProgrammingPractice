// setTimeout returns an id.

console.log("Script Start");
const id = setTimeout(() => {
  console.log("Inside set timeout");
}, 1000);
for (let i = 0; i < 100; i++) {
  console.log("for loop running.....");
}
console.log("setTimeout() id is: ", id);
// Now the question comes that what is the use of this id. Suppose later we do not need this setTimeout function any more so in order to disable this function we need its id.
//Usage:
clearTimeout(id); // This function is used to disable the setTimeout function.
console.log("Script End");

// setInterval----> Calls the callback function continuosly after a certain mentioned interval of time
console.log("Script Start");
setInterval(() => {
  console.log(Math.random());
}, 2000000000); // This function generates a random number after the mentioned milliseconds
console.log("Script End");

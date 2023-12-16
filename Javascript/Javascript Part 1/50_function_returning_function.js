function myFunc() {
  function helloWorld() {
    return "hello world";
  }
  return helloWorld;
}
answer = myFunc(); // So now here answer becomes a function.
console.log(answer());

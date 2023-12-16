const app = () => {
  function addTwoNum(a, b) {
    return a + b;
  }
  const mul = function (a, b) {
    return a * b;
  };
  console.log("Hello from app function");
  console.log(addTwoNum(2, 3));
  console.log(mul(2, 3));
};
app();
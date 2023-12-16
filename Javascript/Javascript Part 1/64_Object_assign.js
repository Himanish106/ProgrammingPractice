// Clone using Object assign

const obj = {
  key1: "value1",
  key2: "value2",
};

// We knew that we can clone using spread operator
// const obj1 = { ...obj };
// console.log(obj1);

// Now we will do it using object assign
const obj2 = Object.assign({}, obj);
console.log(obj2);

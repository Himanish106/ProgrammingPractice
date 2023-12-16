function hello() {
  console.log("Hello World");
}
// javascript function ===> function  + object . This means we can deal it both as a function and as a object.

console.log(hello.name);

// So here hello is considered as an object which has a built in property called name
// We can also create our own property
hello.myOwnProperty = "unique value";
console.log(hello.myOwnProperty);

// Functions also provide another very important builtin property called prototype
console.log(hello.prototype); // {} ---> So we can understand that prototype provides an empty object

// Only functions provide prototype
// Now we can also add key value pair in this empty object or prototype

hello.prototype.myString = "Hello World";
hello.prototype.myNumber = 23;
hello.prototype.sing = function () {
  return "lallalalala";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());

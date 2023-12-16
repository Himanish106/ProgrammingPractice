// call
// function myFunc() {
//   console.log("Hello World");
// }
// myFunc.call(); ----> Functions can also be called in this way.

const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(`Name is ${this.firstName} and age is ${this.age}`);
  },
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

user1.about();
// Suppose I want to call the about method in user2 with the data according to user2
user1.about.call(user2);

// Code Explanation
// We define an object called user1 with properties firstName and age, and a method called about. The about method uses a regular function expression to define the function. Inside the function, we use console.log to display a message with the firstName and age values of the object.
// const user1 = {
//   firstName: "harshit",
//   age: 8,
//   about: function() {
//     console.log(`Name is ${this.firstName} and age is ${this.age}`);
//   },
// };
// We define another object called user2 with properties firstName and age, but it does not have an about method.
// const user2 = {
//   firstName: "mohit",
//   age: 9,
// };
// We then invoke the about method of user1 using the call() method and pass user2 as the argument. The call() method allows us to specify the this value explicitly when invoking a function. In this case, we want to set this to refer to user2 within the about method.
// user1.about.call(user2);
// The about method is executed with this set to user2. Inside the about function, this.firstName and this.age now refer to the properties of user2. Therefore, the message that gets logged to the console will display the values from user2.
// In this example, the output will be: "Name is mohit and age is 9".

// By using the call() method, we can borrow a method from one object and execute it in the context of another object, allowing us to reuse code or methods across different objects while dynamically setting the this value.

// Even if you want to call user1 you have to mention the "this" explicitly
// user1.about.call() ---> Wrong
user1.about.call(user1);

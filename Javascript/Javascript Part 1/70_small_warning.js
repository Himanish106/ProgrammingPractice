const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

// don't do this mistake

// user1.about();
// const myFunc = user1.about;
// myFunc(); //undefined undefined

// when you call myFunc(), the function loses the context of the user1 object. As a result, the this keyword inside the function does not refer to the user1 object, but instead defaults to the global object (window in a browser environment or global in Node.js).

// When the this.firstName and this.age properties are accessed inside myFunc(), they are not defined in the global object, leading to undefined undefined being logged.

// To ensure that the this keyword correctly refers to the user1 object, you can use the bind() method to bind the function to the user1 object explicitly:

const myFunc = user1.about.bind(user1);
myFunc();

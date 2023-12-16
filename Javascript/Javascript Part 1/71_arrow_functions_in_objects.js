// arrow functions

const user1 = {
  firstName: "harshit",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

user1.about(user1); // We are getting undefined here

// In JavaScript, arrow functions have a different behavior regarding the this keyword compared to regular functions. The this value in an arrow function is determined lexically, based on its surrounding context, rather than dynamically.

// In your code example, when you define the about method as an arrow function within the user1 object, the this keyword inside the arrow function refers to the this value of its surrounding context, which is the global object (window in a browser environment or global in Node.js). It does not refer to the user1 object.

// Therefore, when you call user1.about(), you get undefined undefined because the this.firstName and this.age properties are not defined in the global object.

// When I mentioned that the this value in an arrow function is determined lexically, I meant that the this binding in an arrow function is based on its surrounding or enclosing context, specifically how the function is defined in the code.

// In the case of arrow functions, the this value is not dynamically determined at runtime based on how the function is called, as it is with regular functions. Instead, it is determined statically or lexically during the function's creation.

// The surrounding or enclosing context of an arrow function is determined by the scope in which the arrow function is defined. In other words, the this value of an arrow function is inherited from the nearest non-arrow function parent scope.

// This lexical scoping behavior of arrow functions allows them to capture and use the this value from the surrounding context in which they are defined. This is different from regular functions, which have their this value determined dynamically at the time of invocation.

// The arrow function about is defined within the scope of the user1 object. However, arrow functions do not have their own this binding, so this inside the arrow function refers to the this value of its surrounding lexical scope, which is the global scope (i.e., window object in a browser environment).

// As a result, when you invoke user1.about(), this.firstName and this.age within the arrow function are not referring to the firstName and age properties of the user1 object, but instead, they are undefined in the global scope.

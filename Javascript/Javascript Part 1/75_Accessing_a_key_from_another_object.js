const obj1 = { firstName: "Himanish", lastName: "Das" };
// const obj2 = { roll: 18 };
// console.log(obj2.roll); //18
// console.log(obj2.firstName); // undefined

// But I want to access keys of object1 from object2. This is possible

const obj2 = Object.create(obj1); // So from this syntax we can understand that obj2 has some relation with obj1
console.log(obj2); // {}
obj2.roll = 18;
console.log(obj2);
console.log(obj2.firstName); //Himanish

// Let us understand Object.create(proto)
// The .create() method is a built-in method in JavaScript that allows you to create a new object and establish a prototype linkage to an existing object. It provides a way to create objects based on a prototype object, allowing the new object to inherit properties and methods from the prototype.

// Here's an explanation of the .create() method:

// Syntax:
// The .create() method is invoked on the Object constructor and takes one parameter, which is the object to be used as the prototype for the newly created object.

// Object.create(proto);
// Usage:
// When you call .create(proto), it creates a new object and sets the prototype of that object to be the proto object passed as an argument. The new object inherits properties and methods from the proto object.

// const newObj = Object.create(proto);
// Prototype Linkage:
// The new object created using .create() has a prototype linkage established with the proto object. This means that if a property or method is not found on the new object, JavaScript will look up the prototype chain and search for it in the proto object.

// Inheriting Properties:
// The new object created with .create() inherits properties from the prototype object. Any changes made to the properties of the prototype object will be reflected in the new object as well.

// proto.firstName = "John";
// console.log(newObj.firstName); // Output: "John"
// Adding Own Properties:
// You can also add new properties directly to the new object without affecting the prototype object.

// newObj.age = 25;
// console.log(newObj.age); // Output: 25
// Benefits:
// Using .create() allows for object composition and delegation. You can create multiple objects that share the same prototype and easily add or modify properties specific to each object.

// By leveraging the prototype chain, you can achieve code reusability, improve memory efficiency, and organize related functionality in a hierarchical manner.

// To summarize, the .create() method provides a way to create new objects with a specified prototype. It establishes a prototype linkage, enabling inheritance of properties and methods. This is useful for object-oriented programming and achieving code reuse in JavaScript.

// We can also know about an object that it has any prototype or not using __proto__ dunder method
console.log(obj2.__proto__); // {firstName: 'Himanish', lastName: 'Das'}

// __proto__ or [[Prototype]] is same thing.
// But Prototype is something else. We will learn about this later
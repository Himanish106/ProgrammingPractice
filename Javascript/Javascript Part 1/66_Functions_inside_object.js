// Functions inside object or methods

const person = {
  personName: "Harshit",
  age: 18,
  about: function () {
    // console.log(`Name is ${personName} and age is ${age}`); // Writing this syntax as if someone may modify the data i.e personName and age later. But the about should come as same
    // So we are getting an error writing the function like this
    // Uncaught ReferenceError: personName is not defined
    // console.log(`Name is ${this.personName} and age is ${this.age}`); --> Let us understand this.
    console.log(this); // {personName: 'Harshit', age: 18, about: ƒ} ---> Here we are getting the whole object itself. Now to extract a data from an object we know how to do.
    console.log(this.personName);
  },
};
person.about();

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "harsh",
  age: 8,
  //   about: personInfo(), In the example you provided, the reason you can't directly call the function personInfo() when assigning it to the about property is because of the order of execution.

  // In this code, the personInfo() function is invoked immediately when you assign it to the about property. This means that the personInfo() function will be executed at the time of the object's creation.

  // However, the issue is that the personInfo() function doesn't return anything explicitly. When a function doesn't have a return statement, it returns undefined by default.

  // So, in your code, personInfo() is executed immediately and its return value (which is undefined) is assigned to the about property of person1. As a result, person1.about will have a value of undefined.
};
const person2 = {
  firstName: "mohit",
  age: 18,
  about: personInfo,
};
const person3 = {
  firstName: "nitish",
  age: 17,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();

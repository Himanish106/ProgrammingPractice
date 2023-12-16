// We do Parameter Destructuring basically with objects

const person = {
  firstName: "Himanish",
  age: 18,
  gender: "male",
};

// function printDetails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.age);
//   console.log(obj.gender);
// } ---> But we can do the same thing using paramter destructuring

function printDetails({ firstName, age, gender }) {
  console.log(firstName);
  console.log(age);
  console.log(gender);
}

printDetails(person);

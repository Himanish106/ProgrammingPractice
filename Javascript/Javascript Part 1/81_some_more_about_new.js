function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
const userDetails = new CreateUser(
  "Himanish",
  "Das",
  "himanish.das23@gmail.com",
  21,
  "abcd"
);
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "la la la la ";
};
console.log(userDetails);
// Suppose if we want to see the keys. So for that we know we can use for in loop
// for (let key in userDetails) {
//   console.log(key); // So basically it gives the keys and also the keys which is mentioned in its prototype
// }

// Suppose if we want only the keys that is mentioned within the object and not its function prototype

for (let key in userDetails) {
  if (userDetails.hasOwnProperty(key)) console.log(key);
}

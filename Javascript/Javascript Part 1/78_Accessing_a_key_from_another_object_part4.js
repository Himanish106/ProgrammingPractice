// const userMethods = {
//     about: function () {
//       return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//       return this.age > 18;
//     },
//     sing: function () {
//       return "Let her go";
//     },
//   }; ----> Now as we have the concept of the prototype why create a seperate object
function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const userDetails = createUser(
  "Himanish",
  "Das",
  "himanish.das23@gmail.com",
  21,
  "abcd"
);
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la ";
};
console.log(userDetails);
userDetails.about();
console.log(userDetails.is18());
console.log(userDetails.sing());

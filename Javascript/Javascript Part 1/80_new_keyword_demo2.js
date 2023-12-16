//    Now one thing to understand that how a user would understand that he has to call the function using the new keyword
// So in order to make them understand that they have to call the function using the new keyword we have to make the first word of the function name as capital
function CreateUser(firstName, lastName, email, age, address) {
  //   const user = Object.create(createUser.prototype); ---> Not required as we know the concept of new
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
userDetails.about();
console.log(userDetails.is18());
console.log(userDetails.sing());

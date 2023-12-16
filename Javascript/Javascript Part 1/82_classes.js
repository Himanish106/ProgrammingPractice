class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    console.log("la la la la");
  }
}
// function CreateUser(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }

//   CreateUser.prototype.about = function () {
//     return `${this.firstName} is ${this.age} years old.`;
//   };
//   CreateUser.prototype.is18 = function () {
//     return this.age >= 18;
//   };
//   CreateUser.prototype.sing = function () {
//     return "la la la la ";
//   }; ----> When we use classes this thing works in the background
const userDetails = new CreateUser(
  "Himanish",
  "Das",
  "himanish.das23@gmail.com",
  21,
  "abcd"
);
console.log(userDetails);
console.log(CreateUser.prototype); // {constructor: ƒ, about: ƒ, is18: ƒ, sing: ƒ}
CreateUser.prototype.sayHello = function () {
  console.log("Hello");
};
userDetails.sayHello(); // Hello
userDetails.sing();

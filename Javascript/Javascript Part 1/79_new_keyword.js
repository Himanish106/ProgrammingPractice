// function createUser(firstName) {
//   const user = Object.create(createUser.prototype);
//   user.firstName = firstName;
//   return user;
// }
// createUser.prototype.age = 19;

// console.log(createUser("Himanish"));
// console.log(createUser("Himanish").age); // 19

// We can do the same thing using new keyword

function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};
const user1 = new createUser("Himanish", 21);
console.log(user1);

// new keyword
// 1) create empty object ={}. which is referenced by other functions using the this keyword
// 2) return this
// 3) automates this task i.e Object.create(createUser.prototype);

user1.about();

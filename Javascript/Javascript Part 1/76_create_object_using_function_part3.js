const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age > 18;
  },
  sing: function () {
    return "Let her go";
  },
};
function createUser(firstName, lastName, email, age, address) {
  //   const user = {};
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  //   user.about = userMethods.about;
  //   user.is18 = userMethods.is18;
  //   user.sing = userMethods.sing;
  // It is ok that you have only 3 functions. But what will you do if you have millions of functions. It will be very difficult to locate and call each and every function. So it is best to create a prototype linkage of the object. Then we do not have to call the methods from another dictionary each and every time as we had learned earlier. It will first look in its own body whether the function exists or not or more appropriately the key that contains the function exists or not then it goes to the linked object.
  return user;
}
const userDetails = createUser(
  "Himanish",
  "Das",
  "himanish.das23@gmail.com",
  21,
  "abcd"
);
console.log(userDetails);
userDetails.about();
console.log(userDetails.is18());
console.log(userDetails.sing());

// This can again be modified more. LOL. 
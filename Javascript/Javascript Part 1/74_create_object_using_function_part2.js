const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age > 18;
  },
};
function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  //   user.about = function () {
  //     console.log(`${firstName} is ${age} years old`);
  //   };
  //   user.is18 = function () {
  //     return this.age > 18;
  //   }; ---> Suppose if we have 1 million users then each and every time this functions are going to be create and called. More memory is going to be consumed. But if we seperately create a function that means outside the object and inside a seperate object, the function will not be created 1 million times as it is in a different memory location. It maybe called 1 million times but not created 1 million times so that extra memory is not consumed.
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
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
console.log(userDetails.is180());

// Still the program can be modified more. But before that we need to clear our concept before moving to the modification part

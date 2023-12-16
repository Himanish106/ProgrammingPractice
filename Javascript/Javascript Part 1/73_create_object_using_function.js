function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    console.log(`${firstName} is ${age} years old`);
  };
  user.is18 = function () {
    return this.age > 18;
  };
  //   user.is18 = () => {
  //     return age > 18;
  //   }; ---> If you use arrow functions do not use this because this is refering to the objects reference. objects does not have this
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

// But there is lot of modifications required in this code. Let us see in the next file.

// find method
const animals = ["Lion", "Tiger", "Cat", "Dog", "Rabbit"];

function isLen3(string) {
  return string.length == 3;
}

answer = animals.find(isLen3);
console.log(answer); // You may have thought that you could have got dog and cat as an output. But find method returns the 1st index of its desired output. What I mean to say as here I have got cat as an output the iteration will stop as it has found the desired output. Does not matter whether there is any other element with the satisfied function condition

answer1 = animals.find((string) => string.length == 3);
console.log(answer1);

// Real Life example
const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "harsh" },
  { userId: 3, userName: "nitish" },
  { userId: 4, userName: "mohit" },
  { userId: 5, userName: "aaditya" },
];
const myUser = users.find((user) => user.userId == 3);
console.log(myUser);

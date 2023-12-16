const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "Neetu", gender: "female" },
];

// Array Destructuring
const [data1, data2, data3] = users;
console.log(data1);
console.log(data3);

// Nested destructuring
const [{ firstName,userId }, , { gender }] = users;
console.log(firstName+" "+userId);
console.log(gender);

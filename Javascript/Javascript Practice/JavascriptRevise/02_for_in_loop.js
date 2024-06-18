// Mainly used to print the object keys

let obj = {
  Mahesh: 57,
  Nitin: 26,
  Naresh: 82,
  Himanish: 100,
  Kumar: 89,
  Mina: 56,
};

for (let a in obj) {
  console.log(a);
}
console.log(
  "****************************************************************************************************"
);
for (let a in obj) {
  console.log("Marks of " + a + " is " + obj[a]);
}
console.log(
    "****************************************************************************************************"
  );
for (let a of obj) {
  console.log(a);
} // This will give an error as Objects are not iterables as Strings or Arrays

// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// You have to create a object like this

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// Instead of creating an empty dictionary then passing values to it by index we can do it in another way:-
// const obj = {
//   key1: value1,
//   key2: value2,
// };
// console.log(obj); // {key1: 'myvalue1', key2: 'myvalue2'}---> Here we see though the values are coming but in case of keys it is not so. The name of the variables in which the keys are stored is coming but not the keys. For that we can use computed properties. So in this way we can access the keys

const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);

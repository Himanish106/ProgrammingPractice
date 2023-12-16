let array1 = ["item1", "item2"];
// let array2 = array1; ---> So we were seeing here that these 2 arrays are same. Any change in one array is affecting the other array. So the question comes how are we going to clone the array. So we have some processes.
// let array2 = ["item1", "item2"]; ---> This is not a good process to clone an array because it would not be convinient for a large number of elements.

// Slice method
// let array2 = array1.slice(0);

// Concat array
// let array2=[].concat(array1);

// Spread Operator
// let array2 = [...array1];
// console.log(array1 === array2);

// console.log(array2);

// Concatenation techniques
// In case of cloning methods

// let array2 = array1.slice(0).concat(["item3", "item4"]);

// let array2 = [].concat(array1, ["item3", "item4"]);

// let array2 = [...array1,...["item3","item4"]];
let newArray = [1, 2, 3];
let array2 = [...array1, ...newArray];
console.log(array2);

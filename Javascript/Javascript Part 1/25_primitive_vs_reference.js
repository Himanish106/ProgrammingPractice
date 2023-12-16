// primitve vs reference data types

//primitive

let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1");
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);

// Primitive data types are generally small values so directly the values gets stored in a stack. So let us explain the above example. num1 and num2 are absolutely 2 different locations in the memory. Only their values are same. So that is the reason why any change in num1 is not affecting num2

// reference

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// In case of reference data types these are generally large data types and are stored in heap memory. Only addresses are stored in the stack. so when we do array1=array2 in this case both the arrays are pointing at the same address. Yes they do have 2 different pointers but are pointing at the same address. So any change in one of the array will affect the other array

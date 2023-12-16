const fruits = ["apple", "mango"];
fruits.push("banana");
console.log(fruits);

// In JavaScript, the const keyword is used to declare a constant variable that cannot be re-assigned. However, it does not mean that the value of the variable is immutable. In the case of arrays and objects declared with const, you can still modify their contents.

// When you declare an array with const, like in your example const fruits = ["apple", "mango"];, it means that the variable fruits cannot be assigned a new value. You cannot do fruits = ["banana"]; because it would be a re-assignment and would result in an error.

// However, you can modify the array itself, such as adding or removing elements or changing the value of specific elements. In your code, fruits.push("banana"); is adding the string "banana" to the end of the fruits array. This operation is allowed because push() modifies the existing array; it does not reassign a new array to the fruits variable.

// So, the console.log(fruits) statement would output ["apple", "mango", "banana"] because the push() method successfully added the "banana" element to the fruits array. Suppose you reassign the array with an empty array obviously it will result into an error because the memory location gets changed

// NOTE: Always use const with arrays such that no one can change its values
// fill method
// value , start , end

// const myArray=new Array(10) ---> Process to create an array with the help of a constructor
const myArray = new Array(10).fill(5);
console.log(myArray); // [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// So basically fill method is used to fill the array with certain values. But it also has a start an end index. Lets check with an example

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
// Now I want that index 2-5's value becomes 3
// start - desiredStartIndex              end- desiredEndIndex-1
myArray2.fill(3, 2, 6);
console.log(myArray2); // [1, 2, 3, 3, 3, 3, 7, 8]

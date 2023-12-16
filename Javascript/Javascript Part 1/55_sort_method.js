// ASCII TABLE
//char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

const numbers = [1200, 300, 210, 101, 520];
numbers.sort();
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// When we use sort method the data's within the array becomes a string
// const numbers = ["1200", "300", "210", "101", "520"];
// const numbers = [49,51,50,49,53]; ---> Here we will compare the values of the first positions with each other. In case if the values are same consider in the case of 101 and 1200 then 101<1200 as both have 1's so value is 49 now in the second position we will compare 0 and 2 so 0<2 based on the ASCII values mentioned above
console.log(numbers);

const userNames = [
  "harshit",
  "abcd",
  "mohit",
  "nitish",
  "aabc",
  "ABC",
  "Harshit",
];
userNames.sort(); // Look at the ASCII value chart for clear understanding
console.log(userNames);

const numbers1 = [1200, 300, 210, 101, 520]; // But I have to sort the array on the basis of numbers. So keep in mind sort takes a callback as an argument.

numbers1.sort((a, b) => a - b); // If you have to return a single value you can write like this in arrow functions
console.log(numbers1);

// We do not have to dig dip about this concept but just have a basic idea .

// 1200,410
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4
// For descending order do b-a in arrow functions.

const products = [
  { productId: 1, produceName: "p1", price: 300 },
  { productId: 2, produceName: "p2", price: 3000 },
  { productId: 3, produceName: "p3", price: 200 },
  { productId: 4, produceName: "p4", price: 8000 },
  { productId: 5, produceName: "p5", price: 500 },
];

//lowtoHigh
const lowtoHigh = products.slice(0).sort((a, b) => a.price - b.price); // Doing this so that the original array does not get affected
console.log(lowtoHigh);
console.log(products);

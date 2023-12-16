console.log("This is regex tutorial part 3");
function checkMatch(str, regex) {
  if (regex.test(str)) {
    console.log(`The string "${str}" matches with the source ${regex.source}`);
  } else {
    console.log(
      `The string "${str}" does not matches with the source ${regex.source}`
    );
  }
}
let regex = /himanish/;
let str = "hi himanish how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Character sets
// Case 1:
regex = /hi[a-z]anish/; // This means that at the specified position where I have put the character set the string would match any character between a-z
str = "hi hikanish how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 2:
regex = /hi[a-h]anish/; // This means that at the specified position where I have put the character set the string would match any character between a-h
str = "hi hikanish how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex); // Does not match as k does not lies between a to h

// Case 3:
regex = /hi[mkz]anish/; // This means that at the specified position where I have put the character set the string would match any character among mkz. There would be no match for those characters that are not mkz
str = "hi hikanish how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 4:
regex = /hi[^mkz]anish/; // This means that at the specified position where I have put the character set the string would match any character other than mkz. Do not confuse with the ^ symbol in metacharacters because that symbol meant starts with and this means ![mkz]
str = "hi hikanish how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 5:
regex = /hi[^mkz]an[A-Z]sh/; // The character set [A-Z] means it will match only uppercase Characters between A(included) to Z(included)
str = "hi hijanIsh how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 6:
regex = /hi[^mkz]an[A-Z]s[a-h0-9]/; // The character set [A-Z] means it will match only those characters between a(included) and h(included) or 0 to 9.
str = "hi hijanIs7 how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Quantifiers-- Mention the number of characters that can be present in the regex
// Case 1:
regex = /har{4}y/; // This means we need to put 4 times of r to get a exact match
str = "hi harrrry how are you harry?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 2:
regex = /har{0,2}y/; // This means that r can be 0,1 or 2 times
str = "hi hay how are you harry?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Groupings: We use parenthesis for groupings
// Case 1:
regex = /(him){2}anish/; // ---> This means that him should contain 2 times in the string for an exact match
str = "hi himhimanish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 2: Practice
regex = /(him){2}a{4}(n[0-6]){3}i[bcd][a-z0-9][0-9]/;
str = "hi himhimaaaan4n5n3ic55 how are you himanish?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

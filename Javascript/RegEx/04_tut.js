console.log("This is regex part 4");
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

// Character classes
// Case 1
let regex = /\wish/; // \w means any alphanumeric character(-,$ and % are not alphanumeric characters)
let str = "hi hima97_ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex); // We get a match as _ is an alphanumeric character

// Case 2
regex = /\w+ish/; // \w+ means more than one alphanumeric character(-,$ and % are not alphanumeric characters)
str = "hi hima97_ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex); // We get a match as 97_ is an alphanumeric character.

// Case 3
regex = /\Wish/; // \W means non word character(Example space)
str = "hi hima97_ ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex); // We get a match as there is a space after _ .

// Case 4
regex = /\W+ish/; // \W means more than one non word character(Example space)
str = "hi hima97_   ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex); // We get a match as there is a space after _ .

// Digits - \d
// Case 1:
regex = /man\d99/; // \d denotes a single digit. In this regex expression \d99 means a digit followed by 2 9's.
str = "hi himan999ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 2:
regex = /man\d+s99/; // \d+ denotes more than one digit. In this regex expression \d+s99 means more than one digits followed by s99.
str = "hi himan3736s99ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 3:
regex = /man\Ds99/; // \D denotes one non digit. In this regex expression \Ds99 means one non digit followed by s99.
str = "hi himanks99ish how are you?"; // Here k is the non digit
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 4:
regex = /man\D+s99/; // \D denotes more than one non digit. In this regex expression \D+s99 means more than one non digit followed by s99.
str = "hi himankzxcsdfsdags99ish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// WhiteSpace characters: \s

// Case 1:
regex = /hi\s/; // \s denotes a single white space. In this regex expression /hi\s/ means hi followed by a single white space.Even though there are many whitespaces after hi but only a single space is detected.
str = "hi     manish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 2:
regex = /hi\s+/; // \s+ denotes more than one white space. In this regex expression /hi\s+/ means hi followed by more than one white space.Even though there are many whitespaces after hi but only a single space is detected.
str = "hi     manish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 3:
regex = /hi\S/; // \S denotes a single non white space. In this regex expression /hi\S/ means hi followed by a single non white space.
str = "hi     manish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Case 4:
regex = /hi\S+/; // \S+ denotes more than one non white space. In this regex expression /hi\S+/ means hi followed by more than one non white space.
str = "hi     manish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Word Boundary: \b
regex = /himanish\b/; // \b means word boundary. Word boundary means a space after the specified regex. Since here after himanish there is a space so here we get a match. If there was not then we would have not got any match.
str = "himanish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

// Assertions
regex = /h(?=i)/; // This means there must be an i after h
str = "himanish how are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

regex = /h(?!i)/; // This means there can be any character after h
str = "himanis are you?";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

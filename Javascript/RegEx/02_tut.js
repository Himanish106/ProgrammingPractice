console.log("This is regex tutorial part 2");
let regex = /himanish/;
let str = "Hi himanish, Welcome himanish";
result = regex.exec(str);
console.log(result);

function checkMatch(str, regex) {
  if (regex.test(str)) {
    console.log(`The string "${str}" matches with the source ${regex.source}`);
  } else {
    console.log(
      `The string "${str}" does not matches with the source ${regex.source}`
    );
  }
}
checkMatch(str, regex);
// Now lets look at some meta character symbol

regex = /^h/; // ^--> This symbol means that expression will match if the provided string starts with the value provided in regex
str = "himanish";
checkMatch(str, regex); // The string "himanish" matches with the source ^h

regex = /y$/; // $ --> This means ends with given regex
str = "harry";
checkMatch(str, regex);

regex = /h.rry/; // Matches exactly one character at the position of the specified .
str = "hadrry is harry";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

regex = /h*rry/; // * means matches any number of characters before rry.
str = "hadfefewgthyhwujry is harfrwrgrhyhtSrry";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

regex = /ha?rryi?t/; // ? means optional character. That means we can either place it or ignore it. But in place of optional character if we place any character other than the mentioned optional character then the string will not match with regex
str = "hrryt";
result = regex.exec(str);
console.log(result);
checkMatch(str, regex);

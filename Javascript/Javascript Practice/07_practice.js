function undefinedValue() {
  let undefinedValue;
  return undefinedValue;
}
function checkUndefined() {
  try {
    let val = undefinedValue();
    console.log("The value of the undefined variable is: " + val);
  } catch (error) {
    console.log("An undefined variable was accessed, but it has no value.");
  }
}
checkUndefined();
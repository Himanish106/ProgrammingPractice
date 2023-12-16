// block scope vs function scope

// let and const are block scope
// var is function scope

{
  let val1 = 10;
  let val2 = 20;
  const val3 = 30;
  var val4 = 40;
  console.log(val1);
  console.log(val2);
  console.log(val3);
  console.log(val4);
}

{
  console.log(val4); // var has function scope that means it can be accessed throughout the file
  //   console.log(val1);
  //   console.log(val2);
  //   console.log(val3); ----> All these 3 will give error as the variables are defined in one block and we are trying to access it from another block which is not possible as let and const have block scope
}
console.log(val4); // Can be accesed anywhere throughout the program as it has function scope

const band = {
  bandName: "led zepplin",
  famousSong: "Stairway to the heaven",
  year: 1968,
  anotherFamousSong: "Save Your Tears",
};

// If we have to store the values in a seperate variable we were doing like this

// let bandName=band.bandName
// let song=band.famousSong

// Instead of writing like this we can write the code in one line
// let { bandName, famousSong } = band;
// console.log(bandName + " " + famousSong);
// Point to be remembered that the variables within the curly braces should be same as the key name in the dictionary

// Now if you want to give seperate varaiable names
let { bandName: var1, famousSong: var2 } = band;
console.log(var1 + " " + var2);

// Suppose if you want to keep the last 2 key value pair as a object itself
let { bandName, famousSong, ...restDetails } = band;
console.log(restDetails);

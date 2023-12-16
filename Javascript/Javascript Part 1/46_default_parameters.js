// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }
// console.log(addTwo(a))

function addTwo(a, b = 0) {
  return a + b;
}

const ans = addTwo(4, 8);
console.log(ans);
// Now we can set default values like this

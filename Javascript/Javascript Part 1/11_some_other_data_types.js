// undefined
let variable;
console.log(typeof variable);

// const num; ---> Constant value can't be undefined

// null
let myVariable = null;
console.log(typeof myVariable); //object--> This is an error in javascript. But the developers are not fixing it because so many things are built instead of javascript so changing this will lead to change all

// range of int
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// If you need some number bigger than this you can use BigInt

//Bigint
let mynum = BigInt(12);
console.log(mynum); // 12n

let newmynum = 123n;
console.log(newmynum);

console.log(mynum + newmynum); // 135n

let normalInt = 55;
// console.log(newmynum + normalInt); ---> Error cannot add normal integer and big int

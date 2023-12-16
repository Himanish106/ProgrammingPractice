const user = {
  firstName: "harshit",
  //   address: { houseNumber: "1234" },
};
// console.log(user.firstName);
// console.log(user.address.houseNumber);

console.log(user.address); // undefined
// console.log(user.address.houseNumber); TypeError because at first we are getting undefined at user.address then we are trying to access houseNumber then we are getting an error as undefined.houseNumber does'nt makes sense at all. But this error can be handled

console.log(user?.address?.firstName); // undefined. This is known as optional chaining. ?. means at first we question whether there is any .address in it. If present then good else we get undefined and then we again question whether there is any firstName in it again we do not find anything hence we get undefined

console.log(user?.firstName);

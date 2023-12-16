// Continued from file 68

function about(hobby, musician) {
  console.log(
    `Name is ${this.firstName} and age is ${this.age} and hobby is ${hobby} and fav musician is ${musician}`
  );
}
const user1 = {
  firstName: "harshit",
  age: 8,
  //   about: function (hobby, musician) {
  //     console.log(
  //       `Name is ${this.firstName} and age is ${this.age} and hobby is ${hobby} and fav nusician is ${musician}`
  //     ); ---> We can define the function outside like this
  //   },
};
const user2 = {
  firstName: "mohit",
  age: 9,
};

// user1.about.call(user2, "Playing Guitar", "Beethoven");
about.call(user1, "Playing Guitar", "Beethoven");

// apply--> Almost same as call method just we have to pass those extra arguments in an array
about.apply(user2, ["Playing Guitar", "Bach"]);

//bind--> It basically returns a function
about.bind(user1, "Playing Guitar", "Beethoven")(); // Basically it returns a function

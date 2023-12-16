// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }

// We can also write the about function like this

const user1 = {
  firstName: "harshit",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
};

user1.about();

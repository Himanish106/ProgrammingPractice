class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //   setName(firstName, lastName) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Himanish", "Das", 21);
// console.log(person1.fullName());
// console.log(person1.firstName);
// Now I want to call the fullname function as a property of the Object. That means the way I have called firstName. So for that we require getters
// console.log(person1.fullName);
// person1.setName("Harshith", "Vashisth");
console.log(person1.fullName);
person1.fullName = "Rohit Sharma";
// console.log(person1.fullName); ---> For the timing no change is occuring. Here we can use the concept of setters.
console.log(person1.fullName);
// Keep in mind that we have to keep the getter and setter name same if we have to see the effect

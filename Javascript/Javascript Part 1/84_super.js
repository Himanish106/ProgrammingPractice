class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

const animal1 = new Animal("tom", 1);
console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  isRunning() {
    return `${this.name} is running at a speed of ${this.speed} kmph`;
  }
}

const tommy = new Dog("tommy", 3, 35);
console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.isRunning());

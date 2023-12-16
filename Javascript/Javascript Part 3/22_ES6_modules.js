// import { firstName } from "./firstName/firstName.js"; ---> Suppose the name is very big
import { firstName as fname } from "./firstName/firstName.js";
import { age } from "./age/age.js";
import { Person } from "./firstName/Person/Person.js";
// console.log(firstName, age);
console.log(fname, age);
const person = new Person("John", "Doe", 22);
console.log(person);
person.info();

// If you use export default rather using export you do not need to give curly braces. Also remember you can only use export default single time for a file.

// While linking to HTML when you are using concept of es6 modules then you do not need to write defer but you mention the type as module. If you write type="module" then defer automatically gets performed

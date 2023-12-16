// get multiple elements using getElements by class name

const listItems = document.getElementsByClassName("list-item");
console.log(listItems); // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]---> So basically this is an array like object but is not an array
// To check whether it is an array or not
console.log(Array.isArray(listItems)) // false
console.log(typeof listItems) //object
console.log(listItems[1]); 
// splice method
// start , delete , insert
// array(start,delete,insert) ---> Format
// array(1,2) ---> This means from start index 1 I want to delete 2 items
// array(1,0,"Hello World") ---> This means from start index 1 I want to delete 0 items. But insert a string "Hello World"

// Delete
const myArray = ["item1", "item2", "item3"];
deleted_item = myArray.splice(1, 1);
console.log("The deleted item is: " + deleted_item);
console.log(myArray);

//Insert
const myArray2 = ["item1", "item2", "item3"];
myArray2.splice(0, 0, "Hello World"); // Value gets inserted at the mentioned start index
console.log(myArray2);

// Delete and Insert Both.
const myArray3 = ["item1", "item2", "item3", "item4"];
deleted_item = myArray3.splice(1, 2, "Hello World", 27);
console.log("The deleted item is: " + deleted_item);
console.log(myArray3); // Values get inserted at the deleted indices

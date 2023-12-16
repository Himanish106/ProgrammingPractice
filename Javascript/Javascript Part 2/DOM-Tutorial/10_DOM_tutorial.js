// Working with dom2.html
// DOM Traversal

const rootNode = document.getRootNode();
console.log(rootNode); // document
// console.log(rootNode.childNodes); // NodeList [html]

const rootChild = rootNode.childNodes[0];
console.log(rootChild.childNodes); // NodeList(3) [head, text, body]
const htmlFirstChild = rootChild.childNodes[0];
console.log(htmlFirstChild);
const htmlSecondChild = rootChild.childNodes[1];
console.log(htmlSecondChild);
const htmlThirdChild = rootChild.childNodes[2];
console.log(htmlThirdChild);

// Check parentNode
console.log(htmlSecondChild.parentNode);

// Sibling relation
console.log(htmlFirstChild.nextSibling.nextSibling);

// Practice
const container = document.querySelector(".container");
console.log(container.childNodes); // NodeList(5) [text, h1, text, p, text]
console.log(container.children); // HTMLCollection(2) [h1, p] ---> It is used to ommit the text nodes
const h1Tag = document.querySelector("h1");
console.log(h1Tag.childNodes[0].data)
console.log(h1Tag.children); // HTMLCollection []

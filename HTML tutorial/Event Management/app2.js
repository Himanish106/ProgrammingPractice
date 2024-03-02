// const contentElement = document.getElementById("content");
// const content = contentElement.textContent;
// const words = content.split(" ");
// let index = 0;

// function highlightWords() {
//   const word1 = words[index];
//   const word2 = words[(index + 1) % words.length]; // Get the next word (if index reaches the end, wrap around)
//   const modifiedWord1 = `<span class="col">${word1}</span>`;
//   const modifiedWord2 = `<span class="col">${word2}</span>`;
//   const modifiedContent = words.map((word, i) => {
//     if (i === index || i === (index + 1) % words.length) {
//       return i === index ? modifiedWord1 : modifiedWord2;
//     } else {
//       return word;
//     }
//   }).join(' ');
  
//   contentElement.innerHTML = modifiedContent;
  
//   index = (index + 2) % words.length; 
//   setTimeout(highlightWords, 1000); 
// }

// highlightWords();


// const contentElement = document.getElementById("content");

// function toggleColor() {
//   const isBlue = contentElement.classList.contains("col");

//   if (isBlue) {
//     contentElement.classList.remove("col"); // Remove "col" class to make it white
//   } else {
//     contentElement.classList.add("col"); // Add "col" class to make it blue
//   }

//   setTimeout(toggleColor, 2000); // Call toggleColor function recursively after 1 second
// }

// toggleColor();
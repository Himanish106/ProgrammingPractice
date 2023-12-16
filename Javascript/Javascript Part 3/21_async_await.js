// async await

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   }); ----> we can write this same code using async await.

const URL = "https://jsonplaceholder.typicode.com/postssss";

// async function getPosts() {}
// console.log(getPosts()); --------> So async returns a promise

async function getPosts() {
  const response = await fetch(URL); // This means the function should wait till the fetch promise gets resolved
  if (!response.ok) {
    throw new Error("Something went Wrong");
  }
  const data = await response.json(); // function will wait till the promise gets resolved
  return data;
}

getPosts()
  .then((myData) => {
    console.log(myData);
  })
  .catch((error) => {
    console.log("Inside Catch Block");
    console.log(error);
  });

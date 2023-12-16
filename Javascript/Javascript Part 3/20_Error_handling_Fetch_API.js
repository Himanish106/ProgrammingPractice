const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
//   .then((response) => {
//     return response.json();
//     // console.log(response);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Something went wrong");
//   }); // Here the catch block would never be working because in fetch API it only works for network related issues

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    // console.log(response); // Here you can see a property called ok which is coming false. WE can use that to handle our errors
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong!!!!");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Inside Catch");
    console.log(error);
  });

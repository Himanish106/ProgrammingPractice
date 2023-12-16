// fetch
const URL = "https://jsonplaceholder.typicode.com/posts";
// const whatisFetch = fetch(URL);
// console.log(whatisFetch); ----> So we can see that fetch returns a promise
fetch(URL)
  .then((response) => {
    //   console.log(response); ----> This will not return any response but it will return an object of Response. Inside this response we have a method called the json method which can be used to fetch the response.

    //   console.log(response.json()); ----> Now this thing also returns a promise. But it returns with some value
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

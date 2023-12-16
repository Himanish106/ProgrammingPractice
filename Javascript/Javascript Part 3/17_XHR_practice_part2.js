const URL = "https://jsonplaceholder.typicode.com/posts";
// Now in this api if you give like this "https://jsonplaceholder.typicode.com/posts/1"; this /1 /2 /3 are actually the ids which is already mentioned in the API that uniquely identifies a particular individual's data. Now we will try to fetch that.
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    const data = JSON.parse(xhr.response);
    console.log(data);
    const xhr2 = new XMLHttpRequest();
    const id = data[3].id;
    const URL2 = `${URL}/${id}`;
    console.log(URL2);
    xhr2.open("GET", URL2);
    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };
    xhr2.send();
  } else {
    console.log("Something went wrong");
  }
  xhr.onerror = () => {
    console.log("Network Error");
  };
};
xhr.send();

// This is callback hell. We can promisify it

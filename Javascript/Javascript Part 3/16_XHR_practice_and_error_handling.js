const URL = "https://jsonplaceholder.typicode.com/postss";
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", URL);
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Learn Status code mdn
    const data = JSON.parse(xhr.response);
    console.log(data);
  } else {
    console.log("Something went wrong");
  }
  xhr.onerror = () => {
    console.log("Network Error");
  }; // onerror is used if there is any network error such as if the network is disconnected
};
xhr.send();

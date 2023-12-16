// To make a XMLHttpRequest you need to create an object of XMLHttpRequest first
const xhr = new XMLHttpRequest();
// console.log(xhr);
// An HTTP (Hypertext Transfer Protocol) request is a message sent by a client (usually a web browser or an application) to a server to request information or resources from the server. It is a fundamental part of how data is exchanged over the internet.

// An HTTP request typically consists of the following components:

// Request Line: This includes the HTTP method (e.g., GET, POST, PUT, DELETE), the target URL (Uniform Resource Locator), and the HTTP version.

// Headers: Additional metadata about the request, such as the user-agent (information about the client making the request), content type, authentication credentials, and more.

// Body (optional): Some HTTP requests, like POST and PUT, can include a message body that contains data to be sent to the server. For example, when submitting a form on a website, the form data is included in the request body.

// When a server receives an HTTP request, it processes the request and sends an HTTP response back to the client, which contains the requested data or a status code indicating the result of the request (e.g., success, error, redirection). The HTTP response also includes headers and an optional response body with the requested data.

// HTTP requests and responses are the basis for communication between clients and servers on the World Wide Web and form the foundation for most web interactions, such as loading web pages, submitting forms, retrieving data from APIs, and more.

// So to retrieve data from API obviously we need the URL of the API
const URL = "https://jsonplaceholder.typicode.com/posts";
// console.log(xhr.readyState); // 0 ---> Since the open method has not been called
xhr.open("GET", URL); // The open method is a part of the XMLHttpRequest (XHR) object, which is used to make HTTP requests in JavaScript. It is the first step in the process of setting up and configuring the XHR object before sending the actual request.

// console.log(xhr.readyState); // 1 ---> As open method has been called

// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     console.log(xhr.response);
//     // So whatever response we are getting it is JSON format(JSON--> Javascript Object Notation). So the major difference between JSON and normal objects in javascript is that in JSON we have to mention the keys within double inverted commas. And also JSON do not have any predefined methods like normal objects use to have.
//     const response = xhr.response; // We will convert this to normal objects.
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// };
// The onreadystatechange event is triggered whenever the readyState property of the XHR object changes, indicating the current state of the request.
// Instead of writing long line of codes that is to check when the ready state is 4 Instead of writing like that we can write in this manner
xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};
// onload function gets fired only when the readystate changes to 4.
xhr.send();

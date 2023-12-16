// const emails = document.querySelector(".emails");
const xhr = new XMLHttpRequest();
const URL = "https://dummyjson.com/users";
let image = document.querySelector(".image");
xhr.open("GET", URL);

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  //   let emailList = "";
  let imageList = "";
  for (let i = 0; i < data.users.length; i++) {
    // console.log(data.users[i].email);
    // emailList += data.users[i].image + "<br/>";
    imageList += `<img src='${data.users[i].image}' alt=''>` + "<br/>";
  }
  //   emails.innerHTML = emailList;
  image.innerHTML = imageList;
};
xhr.send();

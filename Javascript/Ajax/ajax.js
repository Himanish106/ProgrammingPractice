console.log("This is ajax practice");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open the object
  xhr.open("GET", "himanish.txt", true);

  // What to do on progress(Optional)
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //   What to do when response will be ready
  xhr.onload = function () {
    console.log(this.responseText);
  };
  // Send the generated response as a request to the server
  xhr.send();
}

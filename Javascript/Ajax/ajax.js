console.log("This is ajax practice");
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open the object
  xhr.open("GET", "himanish2.txt", true);

  // What to do on progress(Optional)
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //   What to do when response will be ready
  xhr.onload = function () {
    if (this.status === 200) {
      // Reason of doing this is if instead of himanish.txt I write himanish2.txt which is not present then else block gets executed.
      console.log(this.responseText);
    } else {
      console.log("Some error Occured");
    }
  };
  // Send the generated response as a request to the server
  xhr.send();
}

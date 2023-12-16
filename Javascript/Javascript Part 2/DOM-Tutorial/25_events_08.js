// keypress event----> This event occurs when we press any key from the keyboard

const body = document.body;

body.addEventListener("keypress", (e) => {
  console.log(e);
});

// mouseover event----> Whenever we bring a mouse to a button an event occurs

const button = document.querySelector(".btn-headline");
button.addEventListener("mouseover", () => {
  console.log("Mouseover event occured");
});

// mouseleave event----->  Whenever we remove our mouse to a button an event occurs
button.addEventListener("mouseleave", () => {
  console.log("Mouseleave event occured");
});

console.log("This is regex project");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const contact = document.getElementById("contact");
let validEmail = false;
let validUser = false;
let validContact = false;
let validPassword = false;
$("#failure").hide();
$("#success").hide();
username.addEventListener("blur", () => {
  let regex = /^[a-zA-z]([0-9a-zA-Z]){0,9}$/;
  let str = username.value;
  if (regex.test(str)) {
    console.log("It matches!");
    username.classList.remove("is-invalid");
    validUser = true;
  } else {
    console.log("It does not matches");
    validUser = false;
    username.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  let regex = /^([_\-\.0-9A-Za-z]+)@([_\-\.0-9A-Za-z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  if (regex.test(str)) {
    console.log("Your Email is valid!");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    console.log("Your Email is not valid");
    validEmail = false;
    email.classList.add("is-invalid");
  }
});
contact.addEventListener("blur", () => {
  let regex = /^([0-9]){10}$/;
  let str = contact.value;
  if (regex.test(str)) {
    console.log("Your Contact is valid!");
    contact.classList.remove("is-invalid");
    validContact = true;
  } else {
    console.log("Your Contact is not valid");
    validContact = false;
    contact.classList.add("is-invalid");
  }
});
password.addEventListener("blur", () => {
  let regex = /^(?=.*[!@#$%^&*()\\.,])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
  let str = password.value;
  if (regex.test(str)) {
    console.log("Your Contact is valid!");
    password.classList.remove("is-invalid");
    validPassword = true;
  } else {
    console.log("Your Contact is not valid");
    validPassword = false;
    password.classList.add("is-invalid");
  }
});

let submit = document.getElementById("submit");
let failure = document.getElementById("failure");
let success = document.getElementById("success");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // Submit your form here

  if (validEmail && validUser && validContact && validPassword) {
    console.log("All inputs are correct hence submitting the form");
    success.classList.add("show");
    // failure.classList.remove("show");
    $("#failure").hide(); // Ajax codes
    $("#success").show();
    // The ajax code was written to manage the extra space that was coming
  } else {
    console.log(
      "Either one of the inputs are incorrect. Please correct and try again"
    );

    failure.classList.add("show");
    // success.classList.remove("show");
    $("#failure").show();
    $("#success").hide();
  }
});

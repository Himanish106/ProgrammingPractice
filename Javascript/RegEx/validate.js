const username = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const userContact = document.getElementById("contact");
const errorEmail = document.getElementById("errorEmail");
const errorUser = document.getElementById("errorUser");
const errorPassword = document.getElementById("errorPassword");
const errorContact = document.getElementById("errorContact");
const confirmErrorPassword = document.getElementById("confirmErrorPassword");
function checkUserName() {
  const regex1 = /^[A-Z]/;
  const regex2 = /[0-9!@#$%^*()-+=\\/|{}[\];'",.<>]/;
  const name = username.value;
  if (name == "") {
    errorUser.innerHTML = "";
  } else if (!regex1.test(name)) {
    errorUser.innerHTML = "Username must start with an uppercase";
  } else {
    errorUser.innerHTML = "";
  }
  if (regex2.test(name)) {
    errorUser.innerHTML =
      "Username should not contain numbers or special characters";
  }
}
function checkEmail() {
  const regex1 = /^([\._\-0-9A-Za-z]+)@([0-9A-Za-z]+)\.([a-zA-Z]){2,7}$/;
  const email = userEmail.value.trim();
  if (email == "") {
    errorEmail.innerHTML = "";
  } else if (!regex1.test(email)) {
    errorEmail.innerHTML = "Invalid Email Please check again";
    console.log("Check Error");
  } else {
    errorEmail.innerHTML = "";
    console.log("Check Error2");
  }
}
function checkPassword() {
  password = userPassword.value;
  const hasSpecialCharacters = /[!@#$%&*()_=+\\/<>,.?;"'{}[\]]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  if (password == "") {
    errorPassword.innerHTML = "";
  } else if (hasSpecialCharacters && hasLowerCase && hasUpperCase && hasDigit) {
    errorPassword.innerHTML = "";
  } else {
    errorPassword.innerHTML =
      "Password should contain atleast one uppercase,one lowercase and one special character.";
  }
}
function checkConfirmPassword() {
  const password = userPassword.value;
  const confirmPass = confirmPassword.value;
  if (confirmPass == "") {
    confirmErrorPassword.innerHTML = "";
  } else if (password == confirmPass) {
    confirmErrorPassword.innerHTML = "";
  } else {
    confirmErrorPassword.innerHTML = "Password does not match";
  }
}
function checkContact() {
  const contact = userContact.value;
  if (contact == "") {
    errorContact.innerHTML = "";
  } else if (contact.length == 10) {
    errorContact.innerHTML = "";
  } else {
    errorContact.innerHTML = "Contact must be of 10 digits";
  }
}
username.addEventListener("blur", checkUserName);
userEmail.addEventListener("blur", checkEmail);
userPassword.addEventListener("blur", checkPassword);
confirmPassword.addEventListener("blur", checkConfirmPassword);
userContact.addEventListener("blur", checkContact);

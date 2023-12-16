const formDetails = document.querySelector(".form-details");
const userName = document.getElementById("Username");
const contact = document.getElementById("contact");
const items = document.querySelector(".added-items");

formDetails.addEventListener("submit", (e) => {
  e.preventDefault();
  const userNameText = userName.value;
  const userContact = contact.value;
  const newLi = document.createElement("li");
  const newLiInnerHTML = `<li>Username is ${userNameText} and Contact is ${userContact}  <span><button class="remove">Remove</button></span></li>`;
  newLi.innerHTML = newLiInnerHTML;
  items.append(newLi);
  items.style.listStyleType = "none";
  const removeButton = newLi.querySelector(".remove");
  removeButton.style.backgroundColor = "#38393d";
  removeButton.style.color = "white";
  removeButton.style.border = "none";
  removeButton.style.padding = "1.5rem 1rem";
  removeButton.style.cursor = "pointer";
  newLi.style.backgroundColor = "#3abda3";
  newLi.style.marginBottom = "3px";
  newLi.scrollIntoView({ behavior: "smooth" });
});

items.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const tobeDeletedLi = e.target.parentNode.parentNode;
    const previousLi = tobeDeletedLi.previousElementSibling;
    tobeDeletedLi.remove();
    if (previousLi) {
      previousLi.scrollIntoView({ behavior: "smooth" });
    }
  }
});

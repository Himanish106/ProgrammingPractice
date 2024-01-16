import noteProxy, { addNote, deleteNote } from "./store.js";
import renderNote from "./renderNote.js";
// MODE TOGGLING
const mode = document.getElementById("modeToggle");
const modeName = document.getElementById("modeName");
mode.addEventListener("change", (e) => {
  if (e.target.checked) {
    modeName.innerHTML = "Enable Light Mode";
    document.body.setAttribute("data-bs-theme", "dark");
  } else {
    modeName.innerHTML = "Enable Dark Mode";
    document.body.setAttribute("data-bs-theme", "light");
  }
});
window.addEventListener("notesChanged", () => {
  console.log("Notes Change fired");
  renderNote();
});
renderNote();
const StorefromLocalStorage = JSON.parse(localStorage.getItem("store"));
if (StorefromLocalStorage?.notes.length > 0) {
  noteProxy.notes = StorefromLocalStorage.notes;
}
else{
  localStorage.setItem("store", JSON.stringify(noteProxy));
  renderNote();
}
const form = document.getElementById("noteForm");
const title = document.getElementById("title");
const noteContent = document.getElementById("noteContent");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newNote = {
    id: crypto.randomUUID(),
    cardTitle: title.value,
    note: noteContent.value,
  };
  addNote(newNote);
});

const row = document.querySelector(".row");
row.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("btn-danger")) {
    const id = target.closest(".card").dataset.id;
    deleteNote(id);
  }
});

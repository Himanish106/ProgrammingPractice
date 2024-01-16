import store from "./store.js";
function renderNote() {
  const row = document.querySelector(".row");
  const noteElements = store.notes.map(
    (
      note
    ) => `<div class="card col-3 mb-3 mr-3" style="width: 18rem" data-id=${note.id} >
    <div class="card-body">
      <h5 class="card-title">${note.cardTitle}</h5>
      <p class="card-text">
       ${note.note}
      </p>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>`
  ).join("");
  row.innerHTML = noteElements;
}
export default renderNote;

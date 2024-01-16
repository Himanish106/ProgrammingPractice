const store = {
  notes: [
    {
      id: "1",
      cardTitle: "Demo Title Structure",
      note: "Demo Note Structure",
    },
  ]
};

const noteHandler = {
  set(target, property, value) {
    target[property] = value;
    console.log(target);
    console.log(property);
    console.log(value);
    if (property === "notes") {
      window.dispatchEvent(new Event("notesChanged"));
    }
    localStorage.setItem("store", JSON.stringify(store));
    return true;
  },
};
const noteProxy = new Proxy(store, noteHandler);
function addNote(newNote) {
  noteProxy.notes = [...noteProxy.notes, newNote];
}
function deleteNote(id) {
  noteProxy.notes = noteProxy.notes.filter((note) => note.id !== id);
}
export { addNote, deleteNote };
export default noteProxy;

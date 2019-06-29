//Global vars and elements
const noteList = document.querySelector(".note-list");
const emptyState = document.querySelector(".empty-state");
const noteCollection = [];
let note = 0;

// Note color picker
const colorPicker = document.querySelectorAll("li");
const redNote = colorPicker[0];
const orangeNote = colorPicker[1];
const yellowNote = colorPicker[2];
const greenNote = colorPicker[3];
const blueNote = colorPicker[4];
const purpleNote = colorPicker[5];

// Events for note creation
redNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #FF0033")
  noteList.appendChild(newNote);
  noteCollection.push(newNote);
  addNotes();
});

orangeNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #FF7700")
  noteList.appendChild(newNote);
  noteCollection.push(newNote);
  addNotes();
});

yellowNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #FFAA00")
  noteList.appendChild(newNote);
  noteCollection.push(newNote);
  addNotes();
});

greenNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #AADD22")
  noteList.appendChild(newNote);
  noteCollection.push(newNote);
  addNotes();
});

blueNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #0088FF")
  noteList.appendChild(newNote);
  noteCollection.push(newNote);
  addNotes();
});

purpleNote.addEventListener("click", event => {
  note++;
  const newNote = document.createElement("li");
  configTextArea(newNote);
  configDeleteButton(newNote);
  newNote.setAttribute("style", "background-color: #9911AA")
  noteList.appendChild(newNote);
  noteCollection.push(redNote);
  addNotes();
});

// Functions to config note elements
function configTextArea(newNote) {
  const textArea = document.createElement("textarea");
  newNote.appendChild(textArea);
  textArea.className = "text-area";
  textArea.placeholder = "Type...";
}

function configDeleteButton(newNote) {
  const deleteButton = document.createElement("button");
  newNote.appendChild(deleteButton);
  deleteButton.className = "delete-button";
  deleteButton.innerHTML = "delete";

  deleteButton.addEventListener("click", event => {
    noteList.removeChild(newNote);
    noteCollection.pop(newNote);
    addNotes();
  });
}

// Empty state setting
function addNotes() {
  if (noteCollection.length === 0) {
    emptyState.classList.add("show");
    emptyState.classList.remove("hide");
  } else if (noteCollection.length !== 0) {
    emptyState.classList.add("hide");
    emptyState.classList.remove("show");
  }
}

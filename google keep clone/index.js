// initial mini form
const $formMini = document.getElementsByClassName("form-mini")[0];
const $inputMini = document.getElementsByClassName("input")[0];
// form that gets displayed after formMini is clicked
const $formDetailed = document.getElementsByClassName("form-detailed")[0];
const $btnSubmit = document.getElementsByClassName("btn-submit")[0];
const $noteTitle = document.getElementById("note-heading");
const $noteBody = document.getElementById("note-body");
// DISPLAY ALL THE NOTES
const $notesContainer = document.getElementsByClassName("notes-container")[0];

let state = { title: "", body: "" };
let notes = [];

// OPEN FORM-DETAILED
$inputMini.addEventListener("click", openInputForm);

function openInputForm(e) {
	$formMini.classList.toggle("hide");
	$formDetailed.classList.toggle("hide");
}

// HANDLE FORM SUBMIT
function handleFormSubmit(e) {
	e.preventDefault();
	notes = [...notes, { title: state.title, body: state.body }];
	state = { title: "", body: "" };
	$noteTitle.value = state.title;
	$noteBody.value = state.body;

	renderNotes();
}

// HANDLE FORM-INPUTS VALUE CHANGE
$noteTitle.addEventListener("change", (e) => {
	state = { ...state, title: e.target.value };
});

$noteBody.addEventListener("change", (e) => {
	state = { ...state, body: e.target.value };
});

// NOTES-CONTAINER SECTION

function renderNotes() {
	const elements = notes
		.map((note) => {
			return `<div class="note">
     <h1 class="note-h1">${note.title}</h1>
     <p class="note-p">${note.body}</p>
   </div>`;
		})
		.join("");
	$notesContainer.innerHTML = `${elements}`;
}

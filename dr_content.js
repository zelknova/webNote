const contextForm = document.querySelector(".dr-tbl-input-context"),
  contextInput = contextForm.querySelector("#dr-write-context"),
  contextList = document.querySelector(".dr-show-contextList");

const CONTEXT_LS = "contxt";

let contxt = [];

function loadContext() {
  const loadedContext = localStorage.getItem(CONTEXT_LS);
}

function init() {
  loadContext();
  contextForm.addEventListener("submit", handleSubmit);
}

init();

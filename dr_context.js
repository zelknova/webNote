const contextForm = document.querySelector(".dr-tbl-input-context"),
  contextInput = contextForm.querySelector(".dr-write-input"),
  contextList = document.querySelector(".dr-show-contextList");

const CONTEXT_LS = "contxt";

let contxt = [];

function paintToDo(){

}


function init() {
  loadContext();
  contextForm.addEventListener("submit", handleSubmit);
}

init();

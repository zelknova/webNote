const contextForm = document.querySelector(".dr-contextForm"),
  contextInput = contextForm.querySelector(".dr-tbl-input-context"),
  contextList = document.querySelector(".dr-show-contextList");

const CXT_LS = "contxt";

let contxt = [];

function paintToDo() {}

function handleSubmit(event) {
  event.preventDefault(); // 정의 된 고유 동작을 작동하지 못하게 함. p, input, textarea 입력 안되게 함
  const currentCxtValue = contextInput.value;
  paintContext(currentCxtValue);
  contextInput.value = "";
}

function loadContext() {
  const loadedContexts = localStorage.getItem(CXT_LS);
  if (loadContext !== null) {
    const parsedCxt = JSON.parse(loadContext);
    parsedCxt.forEach(function (cxt) {
      paintContext(cxt.text);
    });
  }
}

function init() {
  loadContext();
  contextForm.addEventListener("submit", handleSubmit);
}

init();

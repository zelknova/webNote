const toDoForm = document.querySelector(".dr-toDoForm"),
  toDoInput = toDoForm.querySelector("#dr-write-todolist"),
  toDoList = document.querySelector(".dr-show-toDolist");

let todayIs = document.querySelector(".dr-today-is");
todayIs.value = new Date().toISOString().slice(0, 10);




const TODO_LS = "toDos";
const TODO_CNT = "listNum";
let toDos = [];
let listNum = [];



// Add a "checked" symbol when clicking on a list item
// const list = document.querySelector("ul");
toDoList.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("list_checked");
    }
  },
  false
);

/*toDoList.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "SPAN") {
      ev.target.classList.toggle("list_checked");
    }
  },
  false
);*/

//리스트에서 지우는 기능
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
  init();
}

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
  localStorage.setItem(TODO_CNT, JSON.stringify(listNum));
}

//todo리스트 입력
function paintToDo(text) {
  if (text === "") {
    alert("내용을 입력해주세요");
  } else {
    const li = document.createElement("li");
    // const ul = document.createElement("ul");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    // const li = document.createElement("li");
    const newId = toDos.length + 1;
    // span.innerText = text;
    li.innerText = text;

    li.appendChild(span);
    span.appendChild(delBtn);
    delBtn.classList.add(
      "deleteBtn-todo"
    ); /* 생성된 element에 클래스이름 설정*/
    li.id = newId;
    
  
    toDoList.appendChild(li);
    const toDoObj = {
      text: text,
      id: newId, //서버를 위한 아이디부여
    };
  
    toDos.push(toDoObj);
    const toDoObjList = {
      id : newId,
    };
    listNum.push(toDoObjList);
    saveToDos(); //push해서 local데이터에 저장.
  
    document.getElementById("dr-num-todo").innerText = Number(listNum.length);

  }
  // totalNum = colsole.log(listNum.length);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); /*문자화해서 parsed라고 지정한거에 넣자*/ /*파싱한다_문자관련명령*/
    parsedToDos.forEach(function (toDo) {   /*Ls에 각 리스트들을 함수 돌려주고, 순서는 받는게 먼저 */
      paintToDo(toDo.text);
    });
  // }else{
  // totalNum = 0;
  }
}




// totalNum = listNum.length;   /*listnum보류*/



function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTodo() {
  let text = document.getElementById("todoInput").value;
  if (text === "") return;
  tasks.push({text: text, done: false});
  document.getElementById("todoInput").value = "";
  save();
  showList();
}

function toggleDone(i) {
  tasks[i].done = !tasks[i].done;
  save();
  showList();
}

function deleteTodo(i) {
  tasks.splice(i, 1);
  save();
  showList();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showList() {
  let listEl = document.getElementById("list");
  listEl.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i].text;
    if (tasks[i].done) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    }
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "完了";
    doneBtn.onclick = function() { toggleDone(i); };
    let delBtn = document.createElement("button");
    delBtn.textContent = "削除";
    delBtn.onclick = function() { deleteTodo(i); };
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    listEl.appendChild(li);
  }
}

showList();
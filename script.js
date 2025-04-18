document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("todoInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = ""; // Clear input after adding
  }
});

function addTask(taskText) {
  const todoList = document.getElementById("todoList");

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  li.appendChild(taskContent);
  li.appendChild(deleteBtn);

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  todoList.appendChild(li);
}

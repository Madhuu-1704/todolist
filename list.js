// Get the necessary elements
var taskInput = document.getElementById("taskInput");
var addButton = document.getElementById("addButton");
var taskList = document.getElementById("taskList");

// Add event listener to the add button
addButton.addEventListener("click", addTask);

// Array to store tasks
var tasks = [];

// Function to add a task
function addTask() {
  var task = taskInput.value;
  if (task !== "") {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
}

// Function to render the tasks
function renderTasks() {
  // Clear the existing list
  taskList.innerHTML = "";

  // Render each task
  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.innerText = tasks[i];

    // Add edit and delete buttons for each task
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", editTask.bind(null, i));
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteTask.bind(null, i));
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }
}

// Function to edit a task
function editTask(index) {
  var newTask = prompt("Enter the new task:");
  if (newTask !== null) {
    tasks[index] = newTask;
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Initial rendering of tasks
renderTasks();

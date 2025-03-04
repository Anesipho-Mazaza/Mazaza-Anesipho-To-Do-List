// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {
    loadUserName();
    displayTasks();
});
// Function to Save User's Name
function saveUserName() {
    let userName = document.getElementById("userNameInput").value.trim();
    
    if (userName !== "") {
        localStorage.setItem("userName", userName);
        document.getElementById("headerText").innerHTML = `${userName}, Welcome! Your To-Do List`;
        document.getElementById("namePopup").style.display = "none";
    }
}
// Function to Load User's Name from Storage
function loadUserName() {
    let storedName = localStorage.getItem("userName");
    if (storedName) {
        document.getElementById("headerText").innerHTML = `${storedName}, Welcome! Your To-Do List`;
        document.getElementById("namePopup").style.display = "none";
    } else {
        document.getElementById("namePopup").style.display = "block";
    }
}
// Function to Create and Save To-Do Items
function CreateToDoItems() {
    let todoText = document.getElementById("todoText").value.trim();
    let todoDate = document.getElementById("todoDate").value;
    let taskType = document.getElementById("taskType").value; // daily, weekly, monthly

    if (todoText === "" || todoDate === "") {
        alert("Please enter a task and select a date!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    let newTask = {
        text: todoText,
        date: todoDate,
        type: taskType,
        completed: false
    };

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    document.getElementById("todoText").value = "";
    document.getElementById("todoDate").value = "";

    displayTasks();
}
// Function to Display Tasks
function displayTasks(filterType = "all") {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        if (filterType === "all" || task.type === filterType) {
            let listItem = document.createElement("li");
            listItem.classList.add("task-item");

            listItem.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text} - ${task.date} (${task.type})</span>
                <button onclick="toggleComplete(${index})">${task.completed ? 'Undo' : 'Done'}</button>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            `;

            taskList.appendChild(listItem);
        }
    });
}

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

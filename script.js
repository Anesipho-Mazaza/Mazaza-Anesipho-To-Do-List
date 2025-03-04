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
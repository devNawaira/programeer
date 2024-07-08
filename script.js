
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return; // Exit the function early if input is empty
    }

    // Create a new list item
    let li = document.createElement("li");
    li.textContent = inputBox.value.trim(); // Set text content of the list item

    // Append a span element with '×' (close button) to the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Append the new list item to the list container
    listContainer.appendChild(li);

    // Clear the input box after adding task
    inputBox.value = '';

    // Save tasks to localStorage
    saveData();
}

// Event listener for marking tasks as checked or deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle the 'checked' class
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the parent <li> of the clicked <span>
        saveData();
    }
});

// Function to save tasks to localStorage
function saveData() {
    localStorage.setItem("taskList", listContainer.innerHTML);
}

// Function to retrieve tasks from localStorage and display them
function showTask() {
    listContainer.innerHTML = localStorage.getItem("taskList");
}

// Call showTask() to display saved tasks when the page loads
showTask();

showTask();
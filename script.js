// Initialize an empty array for storing tasks
let todoList = [];

// Select the form and table body elements
const todoForm = document.getElementById('todoForm');
const todoTableBody = document.querySelector('#todoTable tbody');

// Function to render the table from JSON data
function renderTable() {
  // Clear the existing rows
  todoTableBody.innerHTML = '';

  // Loop through each item in the todoList and create a table row
  todoList.forEach((item, index) => {
    const row = document.createElement('tr');
    
    // Task column
    const taskCell = document.createElement('td');
    taskCell.textContent = item.task;
    row.appendChild(taskCell);
    
    // Status column
    const statusCell = document.createElement('td');
    statusCell.textContent = item.status;
    row.appendChild(statusCell);
    
    // Action column (delete button)
    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTask(index));
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    
    // Append the row to the table body
    todoTableBody.appendChild(row);
  });
}

// Function to handle form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get values from form fields
  const task = document.getElementById('task').value;
  const status = document.getElementById('status').value;
  
  // Add the new task to the todoList array
  todoList.push({ task, status });
  
  // Reset form fields
  todoForm.reset();
  
  // Re-render the table with the new data
  renderTable();
});

// Function to delete a task
function deleteTask(index) {
  todoList.splice(index, 1); // Remove the task at the specified index
  renderTable(); // Re-render the table
}

// Initially render the table (in case the list is not empty)
renderTable();

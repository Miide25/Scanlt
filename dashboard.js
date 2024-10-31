// dashboard.js

// Function to handle the creation of a data collection form
function createDataCollectionForm() {
     window.location.href = 'new.html';
}

// Function to handle user logout
function logout() {
    // Replace this with your actual logout logic
    alert("Logging out...");
    // Example: clear user session and redirect to login page
    // sessionStorage.clear();
    // window.location.href = 'login.html';
}

// Get references to the buttons
const createFormButton = document.getElementById('createForm');
const logoutButton = document.getElementById('logout');

// Add event listeners to the buttons
createFormButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    createDataCollectionForm();
});

logoutButton.addEventListener('click', logout);

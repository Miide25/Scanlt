// scripts.js

// Show the sign-in form
document.getElementById('showSignIn').onclick = function() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signinForm').style.display = 'block';
};

// Show the sign-up form
document.getElementById('showSignUp').onclick = function() {
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
};

// Handle Sign Up
document.getElementById('signupForm').onsubmit = function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const organization = document.getElementById('organization').value;
    const role = document.getElementById('role').value;

    // Store user data in localStorage
    const userData = {
        name,
        email,
        password,
        organization,
        role,
    };

    localStorage.setItem(email, JSON.stringify(userData)); // Use email as key for simplicity

    // Clear form fields
    document.getElementById('signupForm').reset();
    alert('Sign Up successful! You can now sign in.');
};

// Handle Sign In
document.getElementById('signinForm').onsubmit = function(event) {
    event.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert(`Welcome back, ${userData.name}!`);
            // Redirect to another page or perform other actions
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('No user found with that email. Please sign up.');
    }

    // Clear form fields
    document.getElementById('signinForm').reset();
};

// Function to handle form submission
document.getElementById('userForm').onsubmit = function(event) {
    event.preventDefault();
  
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const techNeeds = document.getElementById('techNeeds').value;
    const featureImportance = document.getElementById('featureImportance').value;

    // Create data object to save to localStorage
    const formData = { name, email, techNeeds, featureImportance };
  
    // Save data to localStorage with the email as a unique key
    localStorage.setItem(email, JSON.stringify(formData));

    // Generate and show QR code (with encoded form data)
    const formDataURL = encodeURIComponent(JSON.stringify(formData));
    generateQRCode(`https://example.com/view?data=${formDataURL}`);
    openModal();
};

// Function to populate form with previous responses if they exist
function loadPreviousResponse(email) {
    const savedData = localStorage.getItem(email);
    if (savedData) {
        const { name, techNeeds, featureImportance } = JSON.parse(savedData);
        
        // Populate form fields with previous responses
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('techNeeds').value = techNeeds;
        document.getElementById('featureImportance').value = featureImportance;

        // Optional: Notify the user that previous responses were loaded
        alert("Previous response loaded.");
    } else {
        alert("No previous response found for this email.");
    }
}

// Example: Call loadPreviousResponse with an email after the user logs in
// Assuming login logic exists and fetches the user's email
const userEmail = "user@example.com"; // Replace with logged-in user's email
loadPreviousResponse(userEmail);

// QR code generation function
function generateQRCode(dataURL) {
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${dataURL}&size=200x200" alt="QR Code">`;
}

// Open modal function
function openModal() {
    document.getElementById('qrModal').style.display = 'block';
}

// Close modal function
function closeModal() {
    document.getElementById('qrModal').style.display = 'none';
}

// Share QR code function
function shareQRCode() {
    const qrCodeImage = document.querySelector('#qrCodeContainer img').src;

    if (navigator.share) {
        navigator.share({
            title: 'QR Code for Survey Response',
            text: 'Here is the QR code with my feedback for the platform!',
            url: qrCodeImage,
        }).catch((error) => console.error('Sharing failed:', error));
    } else {
        alert('Sharing not supported on this device.');
    }
}

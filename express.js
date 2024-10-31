const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// Store responses in memory (for demo purposes)
let responses = [];

// Endpoint to submit form data
app.post('/submit', (req, res) => {
    const { name, email, techNeeds, featureImportance } = req.body;
    const id = responses.length + 1; // Simple ID generation
    const responseData = { id, name, email, techNeeds, featureImportance };

    // Save the response (you should save it to a database)
    responses.push(responseData);
    res.json(responseData); // Respond with the saved data (or its ID)
});

// Endpoint for admin to view responses (should be secured)
app.get('/view', (req, res) => {
    // In a real application, implement authentication to ensure only admin can access this
    res.json(responses);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

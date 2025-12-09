// server.js
const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json()); 

// API Endpoint to handle POST request from React
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    
    console.log(`\n--- Data Received from React Form ---`);
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    
    if (name && email) {
        // Sends success response (Requirement 3)
        res.status(200).json({ message: 'Success! Data received by Node.js backend.' });
    } else {
        res.status(400).json({ message: 'Error: Name and Email are required.' });
    }
});

app.listen(port, () => {
    console.log(`Node.js Server running at http://localhost:${port}`);
});
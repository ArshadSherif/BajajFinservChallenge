const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });

// POST endpoint for BFHL challenge
app.post('/bfhl', (req, res) => {
    const { data, file_b64 } = req.body;

    // Extracting numbers and alphabets from data array
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const highest_lowercase_alphabet = alphabets
        .filter(char => char === char.toLowerCase())
        .sort()
        .pop();

    // Example file validation (mocking)
    const file_valid = file_b64 ? true : false; // add real validation logic if needed
    const file_mime_type = file_b64 ? 'image/png' : null; // mock example
    const file_size_kb = file_b64 ? 400 : null; // mock example

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_lowercase_alphabet: [highest_lowercase_alphabet],
        file_valid,
        file_mime_type,
        file_size_kb
    });
});


});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

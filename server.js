const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/include', (req, res) => {
    const page = req.query.page; // Unsanitized user input
    const filePath = path.join(__dirname, 'pages', `${page}`);

    // Attempt to include the file based on user input
    try {
        res.sendFile(filePath);
    } catch (error) {
        res.status(500).send("File not found or an error occurred.");
    }
});

app.listen(port, () => {
    console.log('Server running on http://localhost:3000');
});

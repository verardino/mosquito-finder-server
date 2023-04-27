require('dotenv').config();
const express = require('express');
const app = express();

// Handle api routes
const apiHandler = require('./api/api');
app.use('/api', apiHandler);

// Serve files in public folder
app.use(express.static('public'));

const PORT = process.env['PORT'] || 3000;
app.listen(PORT);
console.log(`Server listening on port ${PORT}...`);

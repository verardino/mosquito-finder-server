require('dotenv').config();
const express = require('express');
const app = express();

/*app.get('/', (req, res) => {
    res.send("Hello, world!");
});*/

// Serve files in public folder
app.use(express.static('public'));

const PORT = process.env['PORT'] || 3000;
app.listen(PORT);

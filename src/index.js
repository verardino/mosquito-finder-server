require('dotenv').config();

const express = require('express');
const app = express();

require("./controllers/AuthController.js")(app);
require("./controllers/UsuarioController.js")(app);
require("./controllers/SecretariaController.js")(app);
require("./controllers/DenunciaController.js")(app);

app.listen(process.env.PORT || 3000);

// const router = require('express').Router();


// router.get('/', (req, res) => {
//     res.send("API route");
// });

// router.get('/test', (req, res) => {
//     res.status(200).json({status: "up", test: "Hello, world!"});
// });

// module.exports = router;
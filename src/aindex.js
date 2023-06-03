require('dotenv').config();

const express = require('express');
const app = express();

require("./database/index.js");

require("./controllers/UserController.js")(app);
// require("./controllers/AuthController.js")(app);
// require("./controllers/SecretariaController.js")(app);
// require("./controllers/DenunciaController.js")(app);


console.log(`Server on in port ${process.env.PORT || 3000}`)
app.listen(process.env.PORT || 3000);
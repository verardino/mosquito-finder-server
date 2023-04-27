const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("API route");
});

router.get('/test', (req, res) => {
    res.status(200).json({status: "up", test: "Hello, world!"});
});

module.exports = router;
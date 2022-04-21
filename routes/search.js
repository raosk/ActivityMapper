const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("No search things yet");
});

router.get('/aaa', (req, res) => {
    res.send("Nothing here either!");
});

module.exports = router;
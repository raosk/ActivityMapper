const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("No profile things yet");
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get("/db", async (req, res) => {
    const { Pool } = require('pg');
    const pool = ( () => {
        if (process.env.NODE_ENV !== 'production') {
            return new Pool({
                connectionString: process.env.DATABASE_URL,
                ssl: false
            });
        } else {
            return new Pool({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false
                }
            });
        }
    })();
    try {
        const client = await pool.connect();
        /* const result = await client.query('SELECT * FROM activity;'); */     // This is for the actual DB table
        const result = await client.query('SELECT id, name, email FROM profile;');  // This is for the test table, which will be removed
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

// TESTING: START
router.get("/banana", (req, res) => {
    res.send(`
    <h1>Fruit?</h1>
    <form action="/result" method="POST">
        <input type="text" name="fruit">
        <button>Submit</button>
    </form>
    `);
});

router.post("/result", (req, res) => {
    if (req.body.fruit.trim().toLowerCase() === "banana") {
        res.send(`
        RIGHT!
        `);
    } else {
        res.send(`
        WRONG...
        `); 
    }

});
// TESTING: END

router.get('/*', (req, res) => {
    res.status(404).send(`
    <p>404</p>
    <p>This does not exists</p>
    `)});

module.exports = router;
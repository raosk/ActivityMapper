require('dotenv').config();
const { Pool } = require('pg/lib');

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public'))); 

app.get("/db", async (req, res) => {
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
        const result = await client.query('SELECT id, name, email FROM profile;');
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
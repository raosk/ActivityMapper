const express = require('express');
const router = express.Router();
const databaseConnect = require('../middleware/connection').databaseConnect;

router.get('/', (req, res) => {
    res.send("No profile things yet");
});

router.get("/todo", async (req, res) => {
    try {
        const pool = await databaseConnect()
        const client = await pool.connect();
        const result = await client.query(`
        select * from activity
        inner join feed on activity.activity_id=feed."activity_activityId"
        inner join users on feed.user_user_id=users.user_id
        inner join activity_has_category on activity.activity_id=activity_activity_id
        inner join category on category_category_id=category_id
        where to_do = '1' and done = '0' and user_name='käyttäjä1'
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

router.get("/done", async (req, res) => {
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
        const result = await client.query(`
        select * from activity
        inner join feed on activity.activity_id=feed."activity_activityId"
        inner join users on feed.user_user_id=users.user_id
        inner join activity_has_category on activity.activity_id=activity_activity_id
        inner join category on category_category_id=category_id
        where done = '1' and to_do ='0' and user_name='käyttäjä1'
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

module.exports = router;
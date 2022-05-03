const express = require('express');
const router = express.Router();
const databaseConnect = require('../middleware/connection').databaseConnect;

router.get("/new", async (req, res) => {
    try {
        const pool = await databaseConnect()
        const client = await pool.connect();
        const result = await client.query(`
        select activity_id, title, description, area, location, TO_CHAR(date_start, 'DD.MM.YYYY') date_start, TO_CHAR(date_end, 'DD.MM.YYYY') date_end, TO_CHAR(date_created, 'DD.MM.YYYY') date_created, ARRAY[category] AS category, user_name AS created_by FROM activity
        inner join feed on activity.activity_id=feed.feed_id
        inner join users on feed.user_user_id=user_id
        inner join activity_has_category on activity.activity_id=activity_has_category.activity_activity_id
        inner join category on activity_has_category.category_category_id=category.category_id	
        order by date_created ASC 
        limit 20
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

router.get("/popular", async (req, res) => {
    try {
        const pool = await databaseConnect()
        const client = await pool.connect();
        const result = await client.query(`
        select description, count(*) as done from activity
        inner join feed on activity.activity_id="feed.activity_activityId"
        inner join users on feed.user_user_id=users.user_id
        inner join activity_has_category on activity.activity_id=activity_activity_id
        inner join category on category_category_id=category_id
        where done = '1' and to_do = '0'
        group by description
        order by done desc
        limit 20;
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

router.get("/upcoming", async (req, res) => {
    try {
        const pool = await databaseConnect()
        const client = await pool.connect();
        const result = await client.query(`
        select activity_id, title, description, area, location, TO_CHAR(date_start, 'DD.MM.YYYY') date_start, TO_CHAR(date_end, 'DD.MM.YYYY') date_end, TO_CHAR(date_created, 'DD.MM.YYYY') date_created, ARRAY[category] AS category, user_name AS created_by FROM activity
        inner join feed on activity.activity_id=feed.feed_id
        inner join users on feed.user_user_id=user_id
        inner join activity_has_category on activity.activity_id=activity_has_category.activity_activity_id
        inner join category on activity_has_category.category_category_id=category.category_id	
        where date_start between '2022-04-21' and '2022-12-30'
        and date_end between '2022-04-21' and '2022-12-30'
        order by date_start asc
        limit 20;
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

router.get("/past", async (req, res) => {
    try {
        const pool = await databaseConnect()
        const client = await pool.connect();
        const result = await client.query(`
        select activity_id, title, description, area, location, TO_CHAR(date_start, 'DD.MM.YYYY') date_start, TO_CHAR(date_end, 'DD.MM.YYYY') date_end, TO_CHAR(date_created, 'DD.MM.YYYY') date_created, ARRAY[category] AS category, user_name AS created_by FROM activity
        inner join feed on activity.activity_id=feed.feed_id
        inner join users on feed.user_user_id=user_id
        inner join activity_has_category on activity.activity_id=activity_has_category.activity_activity_id
        inner join category on activity_has_category.category_category_id=category.category_id	
        where date_end between '2020-04-21' and '2022-04-21'
        order by date_start asc
        limit 20;
        `);
        const results = { 'results': (result) ? result.rows : null};
        res.json( results );
        client.release();
    } catch (err) {
        console.error(err);
        res.json({ error: err });
    }
});

// JUST TESTING: START
/* router.get("/banana", (req, res) => {
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

}); */
// JUST TESTING: END

// 404 - Page not found
router.get('/*', (req, res) => {
    res.status(404).send(`
    <html>
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        <body>
        
            <script src="scripts/mainViews.js"></script>
            <script src="scripts/previewBoxes.js"></script>
            <script src="scripts/popups.js"></script>

            <div id="mainTarget"></div>
            <div id="pop_up_target"></div>
            <div class="err_box">
                <p class="err_num">404</p>
                <p>Page does not exist</p>
                <img src="images/icons/poo_climber.png" class="poo_man">
                <p class="err_text">Are you lost, weary traveller?</p>
                <p><a href="(link to start)">Back to main page</a></p>
            </div>
            

            <script>
                mainView();     // This will call in main view
            </script>
        </body>
    </html>
    `)});

module.exports = router;
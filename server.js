require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'public'))); 

// Routes
app.use('/profile', require('./routes/profile'));
app.use('/search', require('./routes/search'));
app.use('/', require('./routes/common'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
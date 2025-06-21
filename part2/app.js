const express = require('express-session');
const path = require('path');
const db = require(' ./models/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(session({
    secret: 'walkdogsecret',
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.post('/login', async (req, res) => {
    const {username, password } = req.body;
    try {
        const [users] = await db.query('SELECT *')
    }
})

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

// Export the app instead of listening here
module.exports = app;
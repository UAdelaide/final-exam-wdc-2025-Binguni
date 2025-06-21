const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./models/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(session({
    secret: 'walkdogsecret',
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.post('/login', async (req, res) => {
    const {username, password } = req.body;
    try {
        const [rows] = await db.query('SELECT * FROM Users WHERE username= ?'), [username]);
        const user = rows[0];

        if (!user || user.password_hash != passsword){
            return res.status(401).json({ error: 'invalid suername or password'});

        }
        req.session.user = { id: user.user_id, role: user.role};
        res.json({ role: user.role});
    }  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'inetrnal errror' });
    }
});
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
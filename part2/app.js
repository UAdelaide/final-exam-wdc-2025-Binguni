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
    const { username, password } = req.body;
    try {
        // check for the user in the databse with their usernam
        const [rows] = await db.query('SELECT * FROM Users WHERE email = ?', [username]);
        const user = rows[0];

        // an error message for if the username or passsword is wrong

        if (!user || user.password_hash !== password) {
            return res.status(401).json({ error: 'invalid suername or password' });
        }
   // save the userID and their role in the sesssion
        req.session.user = { id: user.user_id, role: user.role };
        res.json({ role: user.role });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'inetrnal errror' });
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'logout_failed' });
      }
      res.clearCookie('connect.sid');
      res.sendStatus(200);
    });
  });


const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
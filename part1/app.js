var express = require('express');
var mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

let db;

(async () => {
  try {
    // Connect to MySQL without specifying a database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',// Set your MySQL root password
      database: 'dogwalks'
    });

    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to databse:', err.message);

  })();
 module.exports = { app, db };


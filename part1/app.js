var express = require('express');
var mysql = require('mysql2/promise');

const app = express();
app.use(express.json());

let db;

(async () => {
  try {
    // Connect to MySQL database
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Set your MySQL root password
      database: 'DogWalkService'
    });

    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database:', err.message);
  }
})(); //

module.exports = { app, db };

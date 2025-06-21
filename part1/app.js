const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

let db = null;


(async () => {
  try {
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '', // Use your MySQL password here
      database: 'DogWalkService'
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Failed to connect to database:', err.message);
  }
})();

function getDb() {
  return db;
}

module.exports = { app, getDb };
const sqlite3 = require('better-sqlite3').verbose();

// Create a new database or open an existing one
const db = new sqlite3.Database('myapp.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database');
  }
});

// Define your database schema and create tables
db.serialize(() => {
  // Create a "users" table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      username TEXT,
      email TEXT,
    )
  `);

  // Create a "passwords" table
  db.run(`
    CREATE TABLE IF NOT EXISTS passwords (
      id INTEGER PRIMARY KEY,
      user_id INTEGER,
      password_hash TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )
  `);

  // You can also insert data here if necessary
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Database connection closed');
  }
});

const express = require('express');
const app = express();
const port = 3000; // Choose your desired port

// Middleware to parse JSON and handle form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route for handling the login form submission
app.post('/login', (req, res) => {
  // Access form data from req.body
  const { email, password } = req.body;

  // TODO: Implement your login logic here, e.g., validate credentials, check against a database, etc.
  // For security reasons, NEVER store plain text passwords in your database.
  
  // Example response
  if (email === 'user@example.com' && password === 'password') {
    res.send('Login successful');
  } else {
    res.send('Login failed');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Create web server
const express = require('express');
const app = express();
// Create a variable to store comments
let comments = [];
// Create a route for POST requests to /comments
app.post('/comments', (req, res) => {
  // Store the comment in the comments array
  comments.push(req.body);
  // Send back the comment
  res.send(req.body);
});
// Create a route for GET requests to /comments
app.get('/comments', (req, res) => {
  // Send back the comments
  res.send(comments);
});
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
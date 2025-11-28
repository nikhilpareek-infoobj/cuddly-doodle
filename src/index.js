const express = require('express');

const app = express();
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

// Greeting endpoint
app.get('/hello', (req, res) => {
  const name = req.query.name || 'stranger';
  res.json({ message: `Hello, ${name}!` });
});

// Echo endpoint - returns whatever JSON was posted
app.post('/echo', (req, res) => {
  res.json({ data: req.body });
});

// Sample users
const users = {
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' },
};

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Export app for testing
module.exports = app;

// Start server only if run directly
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

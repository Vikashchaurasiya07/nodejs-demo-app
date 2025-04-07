// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

let todos = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Get all todos
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Add todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  const newTodo = { id: Date.now(), task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const prevLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);
  if (todos.length === prevLength) return res.status(404).json({ error: 'Todo not found' });

  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`✅ ToDo App running at http://localhost:${PORT}`);
});

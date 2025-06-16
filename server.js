const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const SECRET = 'change_this_secret';

// In-memory user store
const users = [];

// Middleware to verify token and optionally check role
function auth(requiredRole) {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ message: 'Missing Authorization header' });
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Missing token' });
    try {
      const payload = jwt.verify(token, SECRET);
      req.user = payload;
      if (requiredRole && payload.role !== requiredRole) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
}

app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' });
  const hashed = await bcrypt.hash(password, 10);
  const id = users.length + 1;
  users.push({ id, username, password: hashed, role: role || 'user' });
  res.json({ id, username, role: role || 'user' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/admin', auth('admin'), (req, res) => {
  res.json({ message: `Hello admin ${req.user.id}` });
});

app.get('/owner', auth('owner'), (req, res) => {
  res.json({ message: `Hello owner ${req.user.id}` });
});

app.get('/dashboard', auth(), (req, res) => {
  res.json({ message: `Hello user ${req.user.id}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

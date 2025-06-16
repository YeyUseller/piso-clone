const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');

// POST /auth/register
router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ id: user._id, username: user.username });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST /auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1d' });
  res.json({ token });
});

// GET /auth/me
router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user).select('-password');
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

module.exports = router;

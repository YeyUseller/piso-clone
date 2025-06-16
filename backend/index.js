import express from 'express';

const app = express();
app.use(express.json());

// Simple middleware to attach user based on header
app.use((req, res, next) => {
  const role = req.headers['x-user-role'];
  if (role) {
    req.user = { role };
  }
  next();
});

// Role checking middleware
function checkRole(expectedRole) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== expectedRole) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}

// Fake data
const bookings = [
  { id: 1, guest: 'Alice' },
  { id: 2, guest: 'Bob' }
];

const properties = [
  { id: 1, name: 'Beach House' },
  { id: 2, name: 'Mountain Cabin' }
];

// Admin route to view all bookings
app.get('/api/bookings', checkRole('admin'), (req, res) => {
  res.json(bookings);
});

// Owner route to manage properties
app.get('/api/properties', checkRole('owner'), (req, res) => {
  res.json(properties);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const router = require('express').Router();
const Booking = require('../models/Booking');
const Property = require('../models/Property');
const authMiddleware = require('../middleware/auth');

// POST /bookings/book
router.post('/book', authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user,
      property: req.body.property,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /bookings/:userId
router.get('/:userId', authMiddleware, async (req, res) => {
  if (req.user !== req.params.userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  const bookings = await Booking.find({ user: req.params.userId }).populate('property');
  res.json(bookings);
});

module.exports = router;

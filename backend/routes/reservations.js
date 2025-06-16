const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

router.get('/', async (req, res) => {
  const reservations = await Reservation.find().populate('property user');
  res.json(reservations);
});

router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('property user');
    if (!reservation) return res.status(404).end();
    res.json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reservation) return res.status(404).end();
    res.json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

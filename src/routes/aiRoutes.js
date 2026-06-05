const express = require('express');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/free-model', protect, (req, res) => {
  res.json({ message: 'Free model response' });
});

router.post('/premium-model', protect, restrictTo('Premium_User', 'Admin'), (req, res) => {
  res.json({ message: 'Premium model response' });
});

router.delete('/purge-cache', protect, restrictTo('Admin'), (req, res) => {
  res.json({ message: 'Cache purged successfully' });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

// Routes
router.get('/favorites/:userId', favoriteController.getFavorites);
router.post('/favorites/add', favoriteController.addFavorite);
router.post('/favorites/remove', favoriteController.removeFavorite);

module.exports = router;
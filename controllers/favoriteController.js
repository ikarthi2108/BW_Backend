const Favorite = require('../models/Favorite');

// Get Favorites for a User
exports.getFavorites = async (req, res) => {
  try {
    const { userId } = req.params;
    const favorite = await Favorite.findOne({ userId });
    res.status(200).json(favorite ? favorite.workers : []);
  } catch (error) {
    console.error('Get Favorites Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add Favorite
exports.addFavorite = async (req, res) => {
  try {
    const { userId, worker } = req.body;
    let favorite = await Favorite.findOne({ userId });

    if (!favorite) {
      favorite = new Favorite({ userId, workers: [worker] });
    } else {
      if (!favorite.workers.some(w => w._id === worker._id)) {
        favorite.workers.push(worker);
      }
    }
    await favorite.save();
    res.status(200).json({ message: 'Favorite added' });
  } catch (error) {
    console.error('Add Favorite Error:', error);
    res.status(500).json({ message: 'Failed to add favorite' });
  }
};

// Remove Favorite
exports.removeFavorite = async (req, res) => {
  try {
    const { userId, workerId } = req.body;
    const favorite = await Favorite.findOne({ userId });
    if (favorite) {
      favorite.workers = favorite.workers.filter(w => w._id !== workerId);
      await favorite.save();
    }
    res.status(200).json({ message: 'Favorite removed' });
  } catch (error) {
    console.error('Remove Favorite Error:', error);
    res.status(500).json({ message: 'Failed to remove favorite' });
  }
};
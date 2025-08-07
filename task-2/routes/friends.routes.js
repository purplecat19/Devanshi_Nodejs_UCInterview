const express = require('express');
const router = express.Router();  //creates mini app to handle routing

const { getShowDetails, getAllEpisodes } = require('../controllers/friends.controller');

// route for show details
router.get('/show-details', getShowDetails);

// route for episodes
router.get('/episodes', getAllEpisodes);


module.exports = router; // IMPORTANT (export router, so main file can use it)

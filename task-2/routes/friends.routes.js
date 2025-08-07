const express = require('express');
const router = express.Router();  //creates mini app to handle routing

const { getFriends } = require('../controllers/friends.controller');

router.get('/', getFriends);


module.exports = router; // IMPORTANT (export router, so main file can use it)

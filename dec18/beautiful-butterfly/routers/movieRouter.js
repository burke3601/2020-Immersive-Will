const express = require('express');
const { movieHandler } = require('../controllers/movieController');
const router = express.Router();

router.get('/', movieHandler);

module.exports = router;
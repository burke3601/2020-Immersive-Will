const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies');

router.get('/', movieController.list)
    .get('/new', movieController.showForm)
    .post('/new', movieController.processForm)

module.exports = router;
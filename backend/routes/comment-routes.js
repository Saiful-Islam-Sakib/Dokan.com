const express = require('express');
const commentController = require('../controllers/comment-controllers');
const { check } = require('express-validator');

const router = express.Router();

router.get('/comment',commentController.getprodutComments);

router.post('/test',commentController.test);

module.exports = router;
const express = require('express');
const sellerController = require('../controllers/seller-controllers');

const router = express.Router();


router.get('/:sid', sellerController.getsellerinfobyid);

module.exports = router;
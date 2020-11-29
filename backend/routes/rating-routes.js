const express = require('express');
const customerController = require('../controllers/customer-controllers');
const {check} = require('express-validator');
const router = express.Router();


router.patch('/product_rating',customerController.rateproduct);

module.exports = router;
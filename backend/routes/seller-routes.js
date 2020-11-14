const express = require('express');
const sellerController = require('../controllers/seller-controllers');

const router = express.Router();


router.get('/:sid', sellerController.getsellerinfobyid);

router.post('/login',sellerController.sellerLogin);

router.post('/signup',sellerController.sellerSignup);

module.exports = router;
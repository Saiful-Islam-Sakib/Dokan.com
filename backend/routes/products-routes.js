const express = require('express');
const productControllers = require('../controllers/products-controllers');

const router = express.Router();


router.get('/:pid', productControllers.getproductbyid);

module.exports = router;

const express = require('express');
const orderControllers = require('../controllers/order-controllers');

const router = express.Router();

router.get('/cus01/:oid', orderControllers.getOrderbyid);

module.exports = router;

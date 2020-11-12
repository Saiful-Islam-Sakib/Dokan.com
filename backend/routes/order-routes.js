const express = require('express');
const orderControllers = require('../controllers/order-controllers');

const router = express.Router();

router.get('/cus1/:oid', orderControllers.getOrderbyid);

router.patch('/sell1/orderConf/:oid', orderControllers.orderConfirmation);

router.post('/:cid/newOrder',orderControllers.createNewOrder);

router.delete('/:oid',orderControllers.deleteOrder);

module.exports = router;

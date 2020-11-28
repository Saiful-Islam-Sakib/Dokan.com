const express = require('express');
const { check } = require('express-validator');
const orderControllers = require('../controllers/order-controllers');

const router = express.Router();

router.get('/:cid', orderControllers.getOrderbyid);

router.patch('/sell1/orderConf/:oid',check('order_confirmation').not().isEmpty(), orderControllers.orderConfirmation);

router.patch('/sell1/orderDeli/:oid',check('order_delivered').not().isEmpty(), orderControllers.orderDelivered);

router.post('/newOrder',
    [check('p_id').not().isEmpty(),check('c_id').not().isEmpty(),check('delivery_address').not().isEmpty()],
    //check('order_confirmation').not().isEmpty(),check('order_delivered').not().isEmpty(),
    orderControllers.createNewOrder);

router.delete('/deleteorder/:oid',check('order_confirmation').not().isEmpty(),orderControllers.deleteOrder);

module.exports = router;

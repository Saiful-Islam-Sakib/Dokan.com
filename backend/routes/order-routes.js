const express = require('express');
const { check } = require('express-validator');
const orderControllers = require('../controllers/order-controllers');

const router = express.Router();

router.get('/:cid', orderControllers.getOrderbyid);

router.patch('/sell1/orderConf/:oid',check('order_confirmation').not().isEmpty(), orderControllers.orderConfirmation);

router.patch('/sell1/orderDeli/:oid',check('order_delivered').not().isEmpty(), orderControllers.orderDelivered);

router.post('/:cid/newOrder',
    [check('product').not().isEmpty(),check('quantity').isLength({min:1}),check('total_amount').isLength({min:3}),
    check('c_id').not().isEmpty(),check('order_confirmation').not().isEmpty(),check('order_delivered').not().isEmpty(),
    check('order_date').not().isEmpty()],
    orderControllers.createNewOrder);

router.delete('/:cid/:oid',check('order_confirmation').not().isEmpty(),orderControllers.deleteOrder);

module.exports = router;

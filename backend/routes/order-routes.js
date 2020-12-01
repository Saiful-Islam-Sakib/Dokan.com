const express = require('express');
const { check } = require('express-validator');
const orderControllers = require('../controllers/order-controllers');

const router = express.Router();

router.get('/:c_id', orderControllers.getOrderbyid);

router.patch('/orderConf',[check('o_id').not().isEmpty(),check('order_confirmation').not().isEmpty()], orderControllers.orderConfirmation);

router.patch('/orderDeli',[check('order_delivered').not().isEmpty(),
    check('o_id').not().isEmpty()], orderControllers.orderDelivered);

router.post('/newOrder',
    [check('p_id').not().isEmpty(),check('c_id').not().isEmpty(),check('delivery_address').not().isEmpty()],
    //check('order_confirmation').not().isEmpty(),check('order_delivered').not().isEmpty(),
    orderControllers.createNewOrder);

router.delete('/deleteorder/:oid',orderControllers.deleteOrder);

router.delete('/orderRejected',[check('order_delivered').not().isEmpty(),
        check('o_id').not().isEmpty()],orderControllers.orderRejected);

module.exports = router;

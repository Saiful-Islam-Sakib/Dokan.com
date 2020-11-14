const express = require('express');
const customerController = require('../controllers/customer-controllers');
const { check } = require('express-validator');

const router = express.Router();


router.get('/:cid', customerController.getcusinfobyid);

router.post('/signup',
    [check('f_name').not().isEmpty() ,check('l_name').not().isEmpty(),check('email').normalizeEmail().isEmail(),
    check('phone').isLength({min: 11}),check('gender').not().isEmpty(),check('birthday').not().isEmpty(),
    check('city').not().isEmpty(),check('area').not().isEmpty(),check('place').not().isEmpty(),
    check('address').not().isEmpty(),check('delivery_add').not().isEmpty(),check('password').isLength({min:6})],
    customerController.customerSignup);

router.patch('/:cid/edit', customerController.updatecustomer);

router.delete('/delete/:cid', customerController.deletecustomer); // Admin previlege ,so it should be moved to admin-controller 

router.post('/login',customerController.customerLogin);

module.exports = router;

const express = require('express');
const customerController = require('../controllers/customer-controllers');
const { check } = require('express-validator');

const router = express.Router();


router.post('/signup',
    [check('f_name').not().isEmpty() ,check('l_name').not().isEmpty(),check('email').normalizeEmail().isEmail(),
    check('phone').isLength({min: 11}),check('phone').isLength({max :11}),check('gender').not().isEmpty(),check('birthday').not().isEmpty(),
    //check('city').not().isEmpty(),check('area').not().isEmpty(),check('place').not().isEmpty(),check('delivery_add').not().isEmpty()
    check('address').not().isEmpty(),check('password').isLength({min:6})],
    customerController.customerSignup);

router.patch('/editinfo/:cid',
    [check('phone').isLength({min :11}),check('phone').isLength({max :11}),check('city').not().isEmpty(),check('area').not().isEmpty(),
    check('place').not().isEmpty(),check('address').not().isEmpty(),check('delivery_add').not().isEmpty()], 
    customerController.updatecustomer);

router.delete('/delete/:cid', customerController.deletecustomer); // Admin previlege ,so it should be moved to admin-controller 

router.post('/login',
    // [check('email').normalizeEmail().isEmail(),check('phone').isLength({min: 11}),
    // check('phone').isLength({max :11}),check('password').isLength({min:6})],
    customerController.customerLogin);

router.patch('/changePassword/:cid', 
    [check('prevPassword').isLength({min:6}),check('newPassword').isLength({min:6})],
    customerController.changePassword);



router.get('/customerdetails/:id',customerController.customerinfo);


router.post('/product/comment',[check('body').not().isEmpty(),check('body').isLength({min:2})],customerController.commentOnproduct);


router.get('/Search/:name',customerController.Search);

module.exports = router;

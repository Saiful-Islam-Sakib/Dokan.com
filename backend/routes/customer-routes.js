const express = require('express');
const customerController = require('../controllers/customer-controllers');
const { check,body } = require('express-validator');

const router = express.Router();


router.post('/signup',
    [check('f_name').not().isEmpty() ,check('l_name').not().isEmpty(),check('email').normalizeEmail().isEmail(),
    check('phone').isLength({min: 11}),check('phone').isLength({max :11}),check('gender').not().isEmpty(),check('birthday').not().isEmpty(),
    //check('city').not().isEmpty(),check('area').not().isEmpty(),check('place').not().isEmpty(),check('delivery_add').not().isEmpty()
    check('address').not().isEmpty(),check('password').isLength({min:6})],
    customerController.customerSignup);

router.patch('/editinfo',
    [check('phone').isLength({min :11}),check('phone').isLength({max :11}),check('f_name').not().isEmpty(),check('l_name').not().isEmpty(),
    body('email').isEmail(),check('address').not().isEmpty()], 
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

router.post('/rateProduct',[check('p_id').not().isEmpty(),check('s_id').not().isEmpty(),
    check('rating').not().isEmpty(),check('rating').isLength({max:1})],
    customerController.rateproduct);


router.patch('/rateProduct',[check('p_id').not().isEmpty(), check('c_id').not().isEmpty(),
    check('rating').isLength({max:1}),check('rating').isLength({min:1})],customerController.rateproduct);

router.post('/addtowishlist',[check('p_id').not().isEmpty(), check('c_id').not().isEmpty()],customerController.addtowishlist);

router.get('/getwishlist/:cid',customerController.showFavorites);

module.exports = router;

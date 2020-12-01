const express = require('express');
const sellerController = require('../controllers/seller-controllers');
const {check} = require('express-validator');
const router = express.Router();


router.get('/:sid', sellerController.getsellerproducts);

router.post('/login',sellerController.sellerLogin);

router.post('/signup',
    [check('v_f_name').not().isEmpty(),check('v_l_name').not().isEmpty(),check('email').not().isEmpty(),
    check('phone').isLength({min : 11}),check('trade_lic_no').isLength({min : 7}),check('birthday').not().isEmpty(),
    check('v_city').not().isEmpty(),check('v_area').not().isEmpty(),check('v_address').not().isEmpty(),check('nid').isLength({min:10}),
    check('password').isLength({min : 6}),check('b_acc_no').isLength({min:13}),check('b_acc').not().isEmpty(),
    check('bank').not().isEmpty(),check('branch').not().isEmpty(),check('sh_name').not().isEmpty(),
    check('sh_city').not().isEmpty(),check('sh_area').not().isEmpty(),check('sh_place').not().isEmpty(),
    check('sh_area_pc').isLength({min:4})],sellerController.sellerSignup);


router.patch('/updateSellerInfo',
    [check('v_f_name').not().isEmpty(),check('v_l_name').not().isEmpty(),check('email').not().isEmpty(),
    check('phone').isLength({min : 11}),
    check('v_city').not().isEmpty(),check('v_area').not().isEmpty(),check('v_address').not().isEmpty(),
    check('b_acc_no').isLength({min:13}),check('b_acc').not().isEmpty(),
    check('bank').not().isEmpty(),check('branch').not().isEmpty(),check('sh_name').not().isEmpty(),
    check('sh_city').not().isEmpty(),check('sh_area').not().isEmpty(),check('sh_place').not().isEmpty(),
    check('sh_area_pc').isLength({min:4})],sellerController.updateSeller);
    
    
router.get('/orders/:sid',check('sid').not().isEmpty(),sellerController.sellerOrder);

module.exports = router;
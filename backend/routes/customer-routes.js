const express = require('express');
const customerController = require('../controllers/customer-controllers');

const router = express.Router();


router.get('/:cid', customerController.getcusinfobyid);

router.post('/signup', customerController.customerSignup);

router.patch('/:cid/edit', customerController.updatecustomer);

router.delete('/delete/:cid', customerController.deletecustomer); // Admin previlege ,so it should be moved to admin-controller 

router.post('/login',customerController.customerLogin);

module.exports = router;

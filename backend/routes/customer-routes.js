const express = require('express');
const customerController = require('../controllers/customer-controllers');

const router = express.Router();


router.get('/:cid', customerController.getcusinfobyid);

router.post('/signup', customerController.createcustomer);

router.patch('/:cid/edit', customerController.updatecustomer);

module.exports = router;

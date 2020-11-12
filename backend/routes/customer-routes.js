const express = require('express');
const customerController = require('../controllers/customer-controllers');

const router = express.Router();


router.get('/:cid', customerController.getcusinfobyid);

router.post('/', customerController.createcustomer);

module.exports = router;

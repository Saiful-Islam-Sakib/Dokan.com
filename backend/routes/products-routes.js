const express = require('express');
const productControllers = require('../controllers/products-controllers');

const router = express.Router();


router.get('/:pid', productControllers.getproductbyid);

router.post('/sell1/newProduct', productControllers.createproduct); // This feature should be used by a seller

router.delete('/sell1/deleteProd/:pid',productControllers.deleteproduct); // This feature should be used by a seller

router.get('/searchb/:pname',productControllers.productSearch);

router.get('/searchc/:pcat',productControllers.prodSearchbyCategory);

module.exports = router;

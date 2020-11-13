const express = require('express');
const productControllers = require('../controllers/products-controllers');

const router = express.Router();


router.get('/:pid', productControllers.getproductbyid);

router.post('/sell1/newProduct', productControllers.createproduct); // This feature should be used by a seller

router.delete('/sell1/deleteProd/:pid',productControllers.deleteproduct); // This feature should be used by a seller

//router.get('/search/:pname',productControllers.productSearch);

router.get('/search/:pcat',productControllers.prodSearchWithCategory);

module.exports = router;

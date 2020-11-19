const express = require('express');
const { check } = require('express-validator');
const productControllers = require('../controllers/products-controllers');

const router = express.Router();


router.get('/:pid', productControllers.getproductbyid);

router.post('/sell1/newProduct',
    [check('name').not().isEmpty(),check('brand').not().isEmpty(),check('price').not().isEmpty(),
    check('price').isLength({min:2,max:3}),check('category').not().isEmpty(),check('sub_category').not().isEmpty(),
    check('s_id').not().isEmpty()],
    productControllers.addproduct); // This feature should be used by a seller 

router.delete('/sell1/deleteProd/:pid',productControllers.deleteproduct); // This feature should be used by a seller

router.get('/searchbyname/:pname',productControllers.productSearch);

router.get('/searchbycategory/:pcat',productControllers.prodSearchbyCategory);

module.exports = router;

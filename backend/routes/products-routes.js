const express = require('express');
const { check } = require('express-validator');
const productControllers = require('../controllers/products-controllers');

const router = express.Router();


router.get('/productdetails/:pid', productControllers.getproductbyid);

router.post('/newProduct',
    [check('name').not().isEmpty(),check('brand').not().isEmpty(),check('price').not().isEmpty(),
    check('price').isLength({min:2}),check('price').isLength({max:4}),check('category').not().isEmpty(),check('sub_category').not().isEmpty(),
    check('s_id').not().isEmpty()],
    productControllers.addproduct); // This feature should be used by a seller 

router.delete('/deleteProd/:pid',check('pid').not().isEmpty(),productControllers.deleteproduct); // This feature should be used by a seller

router.get('/consumerFood/:psubcat',productControllers.productbySubcat);

router.post('/ploc',productControllers.productbylocation)

//router.get('/searchbycategory/:pcat',productControllers.prodSearchbyCategory);

//router.delete('/sp/:id',productControllers.del);

module.exports = router;

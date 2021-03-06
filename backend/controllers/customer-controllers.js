const httpError = require("../models/http-errors");
const { validationResult } = require("express-validator");
const customer = require("../models/customer-model");
const product = require("../models/product-model");
const comment = require("../models/comment-model");
const rating_model = require("../models/rating-model");
const mongo = require("mongoose");

let dummy_customer = [
    {
        c_id: "cus1",
        f_name: "Emon",
        l_name: "Haque",
        email: "customer@gmail.com",
        phone: "01715566777",
        gender: "male",
        birthday: "10-07-1993",
        city: "Dhaka",
        area: "Uttara",
        place: "sector 4",
        address: "38/3 road no-16",
        delivery_add: "38/3 road no-16",
        password: "123456",
        orders: ["1", "2"],
    },
];

const customerinfo = async (req, res, next) => {
    const userid = req.params.id;
    let customerinfo;
    try {
        customerinfo = await customer.findById(userid).populate("orders");
    } catch (err) {
        const erro = new httpError("Somthing went wrong", 422);
        return next(erro);
    }
    if (!customerinfo || customerinfo.orders.length === 0) {
        throw new httpError("User not exist", 404);
    }
    res.status(200).json({
        msg: customerinfo.orders.map((orders) =>
            orders.toObject({ getters: true })
        ),
    });
};

const customerSignup = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        const erro = new httpError(
            "Customer Signup failed,please try again",
            422
        );
        return next(erro);
    }

    const {
        f_name,
        l_name,
        email,
        phone,
        gender,
        birthday,
        address,
        password,
    } = req.body;
    //city,area,place,,delivery_add
    let existingUser1;
    let existingUser2;
    try {
        existingUser1 = await customer.findOne({ email: email });
        existingUser2 = await customer.findOne({ phone: phone });
    } catch (err) {
        const erro = new httpError(
            "Customer Signup failed,please try again",
            500
        );
        return next(erro);
    }
    if (existingUser1 || existingUser2) {
        const erro = new httpError("Customer already exist", 421);
        return next(erro);
    }

    const createdUser = new customer({
        f_name,
        l_name,
        email,
        phone,
        gender,
        birthday,
        address,
        password,
        orders: [],
    });
    //,city,area,place,delivery_add
    try {
        await createdUser.save();
    } catch (err) {
        const erro = new httpError("Customer Signup failed", 500);
        return next(erro);
    }
    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const updatecustomer = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        throw new httpError("Invalid information", 422);
    }
    const { c_id, f_name, l_name, email, phone, address, password } = req.body;
    const cus_id = c_id;

    let updateCusInfo;
    try {
        updateCusInfo = await customer.findById(cus_id);
    } catch (err) {
        const erro = new httpError("Something went wrong", 500);
        return next(erro);
    }
    if (updateCusInfo.password === password) {
        updateCusInfo.phone = phone;
        updateCusInfo.f_name = f_name;
        updateCusInfo.l_name = l_name;
        updateCusInfo.email = email;
        updateCusInfo.address = address;
        try {
            await updateCusInfo.save();
        } catch (err) {
            const erro = new httpError(
                "Sorry could not update customer info",
                500
            );
            return next(erro);
        }
        res.status(201).json({
            customer: updateCusInfo.toObject({ getters: true }),
        });
    } else {
        res.status(500).json({ data: "Your password did not match" });
    }
};

const changePassword = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        throw new httpError("Invalid information", 422);
    }
    const cus_id = req.params.cid;
    const { prevPassword, newPassword } = req.body;
    let cusinfo;
    try {
        cusinfo = await customer.findById(cus_id);
    } catch (err) {
        const erro = new httpError("Something went wrong", 500);
        return next(erro);
    }
    if (cusinfo.password !== prevPassword) {
        console.log(cusinfo.password);
        console.log(prevPassword);
        return res.json({ msg: "Your password did not match." });
    }

    cusinfo.password = newPassword;

    try {
        await cusinfo.save();
    } catch (err) {
        const erro = new httpError(
            "Something went wrong,could not update password",
            500
        );
        return next(erro);
    }
    res.status(200).json({ msg: "Successfully changed password" });
};

//This will be used by the admin
const deletecustomer = (req, res, next) => {
    const cus_id = req.body.cid;
    if (!dummy_customer.filter((p) => p.id !== cus_id)) {
        throw new httpError("Could not find customer!", 404);
    }
    dummy_customer = dummy_customer.filter((p) => p.id !== cus_id);
    res.status(200).json({ msg: "Customer Deleted" });
};

const customerLogin = async (req, res, next) => {
    const { email, phone, password } = req.body;
    /*
    const validCustomer = dummy_customer.find(p => (p.email === email || p.phone === phone ));
    if(!validCustomer || validCustomer.password !== password){
        throw new httpError('Could not identify Customer',401);
    } */
    let existingUser1;
    let existingUser2;
    if (email) {
        try {
            existingUser1 = await customer.findOne({ email: email });
        } catch (err) {
            const erro = new httpError(
                "Customer Login failed,please try again",
                500
            );
            return next(erro);
        }
        //console.log(existingUser1,'here');
        if (!existingUser1 || existingUser1.password !== password) {
            const erro = new httpError(
                "Invalid credentials ,could not log in",
                401
            );
            return next(erro);
        }
        existingUser1.password = null;
        res.status(201).json({ msg: existingUser1 });
    }
    if (phone) {
        try {
            existingUser2 = await customer.findOne({ phone: phone });
        } catch (err) {
            const erro = new httpError(
                "Customer Login failed,please try again",
                500
            );
            return next(erro);
        }
        //console.log(existingUser2,'there');
        if (!existingUser2 || existingUser2.password !== password) {
            const erro = new httpError(
                "Invalid credentials ,could not log in",
                401
            );
            return next(erro);
        }
        existingUser2.password = null;
        res.status(201).json({ msg: existingUser2 });
    }
};

const commentOnproduct = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        throw new httpError("Something wrong in Comment", 422);
    }
    const { p_id, user_id, body } = req.body;
    let productexist;
    try {
        productexist = await product.findById(p_id);
    } catch (err) {
        const erro = new httpError("Something went wrong on product", 404);
        return next(erro);
    }
    if (!productexist) {
        const erro = new httpError("Product not exist", 500);
        return next(erro);
    }
    let customerexist;
    try {
        customerexist = await customer.findById(user_id);
    } catch (err) {
        const erro = new httpError("Something went wrong on customer", 404);
        return next(erro);
    }
    if (!customerexist) {
        const erro = new httpError("Customer not exist", 500);
        return next(erro);
    }
    const name = customerexist.f_name + " " + customerexist.l_name;
    const createNewComment = new comment({ p_id, user_id, name, body });
    try {
        const session = await mongo.startSession();
        session.startTransaction();
        await createNewComment.save({ session: session });
        productexist.comments.push(createNewComment);
        await productexist.save({ session: session });
        await session.commitTransaction();
    } catch (err) {
        const erro = new httpError("Could not comment on product", 403);
        return next(erro);
    }
    res.status(201).json({ data: "Your comment was posted" });
};

const rateproduct = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        throw new httpError("Something wrong in Rating", 422);
    }
    const { p_id, c_id, rating } = req.body;
    let checkproduct_ordered;
    try {
        checkproduct_ordered = await customer.findById(c_id).populate("orders");
    } catch (err) {
        const erro = new httpError("You can not rate this product", 403);
        return next(erro);
    }
    let allorder = checkproduct_ordered.orders;
    let found;
    if (allorder.length > 0) {
        const v1 = allorder.map((order) => order.toObject({ getters: true }));
        const v2 = v1.map(({ p_id }) => ({ p_id }));
        const v3 = v2.map(({ p_id }) => p_id);
        found = v3.find((item) => item === p_id);
    }
    if (!found) {
        const erro = new httpError("You have not ordered this product", 500);
        return next(erro);
    }
    let prevRateinfo, modifyrating;
    try {
        prevRateinfo = await rating_model.find({ p_id: p_id, c_id: c_id });
        modifyrating = prevRateinfo[0];
    } catch (err) {}
    let cus, prod;
    try {
        cus = await customer.findById(c_id);
        prod = await product.findById(p_id);
    } catch (err) {
        const erro = new httpError("Something went wrong 1", 403);
        return next(erro);
    }
    let prevRating,
        preRateCount,
        total,
        newtotal,
        newRateCount,
        newRatingofProduct,
        ifRatingExist,
        val = 0;
    prevRating = parseFloat(prod.rating);
    preRateCount = parseInt(prod.rating_count);
    total = parseInt(prevRating * preRateCount);
    if (modifyrating) {
        ifRatingExist = modifyrating.rating;
        total = total - parseFloat(ifRatingExist);
        preRateCount = preRateCount - 1;
        val = 1;
        modifyrating.rating = rating;
        try {
            await modifyrating.save();
        } catch (err) {
            const erro = new httpError("Something went wrong", 403);
            return next(erro);
        }
    }
    newtotal = total + parseFloat(rating);
    newRateCount = preRateCount + 1;
    newRatingofProduct = newtotal / newRateCount;

    prod.rating = newRatingofProduct;
    if (val === 1) {
        try {
            await prod.save();
        } catch (err) {
            const erro = new httpError("Something went wrong", 403);
            return next(erro);
        }
    } else {
        prod.rating = newRatingofProduct;
        prod.rating_count = newRateCount;
        const addrating = new rating_model({ p_id, c_id, rating });
        try {
            //console.log('here 3');
            const sess = await mongo.startSession();
            sess.startTransaction();
            //console.log('here 4');
            await addrating.save({ session: sess });
            //console.log('here 5');
            cus.rated.push(addrating);
            await cus.save({ session: sess });
            //console.log('here');
            await prod.save({ session: sess });
            //console.log('here 2');
            await sess.commitTransaction();
        } catch (err) {
            const erro = new httpError("Something went wrong 2", 403);
            return next(erro);
        }
    }
    res.status(201).json({ data: "Product Rated" });
};
const addtowishlist = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        console.log(err);
        throw new httpError("Something went wrong", 422);
    }
    const { c_id, p_id } = req.body;
    let customerexist;
    try {
        customerexist = await customer.findById(c_id);
    } catch (err) {
        const erro = new httpError("Could not make an order", 500);
        return next(erro);
    }
    if (!customerexist) {
        const erro = new httpError("Could not find user", 500);
        return next(erro);
    }
    let productexist;
    try {
        productexist = await product.findById(p_id);
    } catch (err) {
        const erro = new httpError("Could not make an order", 500);
        return next(erro);
    }
    if (!productexist) {
        const erro = new httpError("Could not find product", 500);
        return next(erro);
    }
    /*
    let wishexist;
    try{
        wishexist = await customer.findById(cid).populate('wishlist');
    }catch(err){
        const erro = new httpError('Something gone wrong',500);
        return next(erro);
    }
    let wished = wishexist.wishlist;
    let found;
    if(wished.length > 0){
        const v1 = wished.map(order => order.toObject({getters:true}));
        const v2 = v1.map(({p_id}) => ({p_id}));
        const v3 = v2.map(({p_id}) => p_id);
        found = v3.find(item => item === p_id);
    }
    if(!found){*/
    try {
        customerexist.wishlist.push(p_id);
        await customerexist.save();
    } catch (err) {
        const erro = new httpError("Something gone wrong last", 500);
        return next(erro);
    }
    console.log("hello");
    return res.status(201).json({ data: "Product added to wishlist" });
    /*}else{
        return res.status(501).json({data : 'Can not add product to wishlist'});
    }*/
};
const showFavorites = async (req, res, next) => {
    const cid = req.params.cid;
    let wishexist;
    try {
        wishexist = await customer.findById(cid).populate("wishlist");
    } catch (err) {
        const erro = new httpError("Something gone wrong", 500);
        return next(erro);
    }
    if (!wishexist) {
        return res.status(403).json({ data: "No product added in wishlist" });
    } else {
        let wished = wishexist.wishlist;
        return res.status(201).json({ data: wished });
    }
};

exports.customerinfo = customerinfo;
exports.customerSignup = customerSignup;
exports.updatecustomer = updatecustomer;
exports.deletecustomer = deletecustomer;
exports.customerLogin = customerLogin;
exports.changePassword = changePassword;
exports.commentOnproduct = commentOnproduct;
exports.rateproduct = rateproduct;
exports.addtowishlist = addtowishlist;
exports.showFavorites = showFavorites;

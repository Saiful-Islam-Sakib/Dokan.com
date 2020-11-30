import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Products.css";
import SingleProduct from "./SingleProduct";

const Products = (props) => {
    const dispatch = useDispatch();
    const fullStore = useSelector((state) => state.seller);

    useEffect(() => {
        dispatch({
            type: "LOAD_PRODUCTS",
            sellerId: JSON.parse(localStorage.getItem("seller"))._id,
        });
    }, []);

    return (
        <ul className="all-products">
            {fullStore.products?.map((product) => (
                <SingleProduct product={product}></SingleProduct>
            ))}
        </ul>
    );
};

export default Products;

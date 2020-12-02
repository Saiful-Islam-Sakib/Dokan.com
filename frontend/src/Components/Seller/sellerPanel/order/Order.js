import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Order.css";
import SingleOrder from "./SingleOrder";

const Order = (props) => {
    const dispatch = useDispatch();
    const sellerStore = useSelector((state) => state.seller);

    useEffect(() => {
        dispatch({
            type: "LOAD_MY_ORDERS",
            sellerId: JSON.parse(localStorage.getItem("seller"))._id,
        });
    }, []);
    return (
        <div class="order-page">
            <h2>YOUR ORDERS</h2>
            <ul class="all-order-items">
                {sellerStore.orders?.map((product, index) => (
                    <SingleOrder key={index} product={product}></SingleOrder>
                ))}
            </ul>
        </div>
    );
};

export default Order;

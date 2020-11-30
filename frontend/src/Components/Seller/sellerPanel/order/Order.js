import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./Order.css";
import SingleOrder from "./SingleOrder";

const Order = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: "LOAD_MY_ORDERS",
            //sellerId: JSON.parse(localStorage.getItem("seller"))._id,
        });
    }, []);
    return (
        <div class="order-page">
            <h2>YOUR ORDERS</h2>
            <ul class="all-order-items">
                {/* map all the orders using the list underneath  */}
                <SingleOrder></SingleOrder>
            </ul>
        </div>
    );
};

export default Order;

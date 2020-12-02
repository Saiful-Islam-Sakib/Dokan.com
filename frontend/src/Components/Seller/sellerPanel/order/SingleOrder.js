import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Order.css";

export default function SingleOrder({ product }) {
    const dispatch = useDispatch();
    const sellerStore = useSelector((state) => state.seller);

    const handleOrderAccept = () => {
        dispatch({
            type: "ACCEPT_ORDER",
            orderId: product._id,
        });
        window.location.reload(false);
    };

    const handleOrderReject = () => {
        dispatch({
            type: "REJECT_ORDER",
            orderId: product._id,
        });
        window.location.reload(false);
    };

    const handleOrderDelivered = () => {
        dispatch({
            type: "DELIVERED_ORDER",
            orderId: product._id,
        });
        window.location.reload(false);
    };

    return (
        <li class="order-item">
            <img src={product?.img} alt={product.p_name} />
            <div class="order-details">
                <div class="order-date">
                    {new Date(product.date).toGMTString()}
                </div>
                <div class="order-name">{product.p_name}</div>
                <div class="order-details .order-address">
                    Address: {product.delivery_address}
                </div>
                <div class="order-price">
                    Price: {product.total_amount / product.quantity} tk
                </div>
                <div class="order-amount">{product.quantity}x</div>
                <div class="order-totalPrice">
                    Total Price: {product.total_amount} tk
                </div>
                <div class="product-order-buttons">
                    {sellerStore.orders.filter((o) => o._id === product._id)[0]
                        .order_confirmation ? (
                        <>
                            <label>Order Accepted</label>
                            {sellerStore.orders.filter(
                                (o) => o._id === product._id
                            )[0].order_delivered ? (
                                <label>{" & Order Delivered"}</label>
                            ) : (
                                <button
                                    class="delivered-order-button"
                                    onClick={handleOrderDelivered}
                                >
                                    DELIVERED
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <button
                                class="accept-order-button"
                                onClick={handleOrderAccept}
                            >
                                ACCEPT
                            </button>
                            <button
                                class="cancel-order-button"
                                onClick={handleOrderReject}
                            >
                                REJECT
                            </button>
                        </>
                    )}
                </div>
            </div>
        </li>
    );
}

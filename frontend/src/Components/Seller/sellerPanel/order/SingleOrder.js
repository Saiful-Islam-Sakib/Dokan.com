import React from "react";
import { useDispatch } from "react-redux";

import "./Order.css";

export default function SingleOrder() {
    const dispatch = useDispatch();

    const handleOrderAccept = () => {
        dispatch({
            type: "ACCEPT_ORDER",
            //orderId: ,
        });
    };

    const handleOrderReject = () => {
        dispatch({
            type: "REJECT_ORDER",
            //orderId: ,
        });
    };

    const handleOrderDelivered = () => {
        dispatch({
            type: "DELIVERED_ORDER",
            //orderId: ,
        });
    };

    return (
        <li class="order-item">
            <img
                src="https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/o/n/onion_peyaj_local_3.jpg"
                alt="peyaj"
            />
            <div class="order-details">
                <div class="order-date">21-12-2020</div>
                <div class="order-name">ata moyd asuji</div>
                <div class="order-price">Address: omuk tomuk</div>
                <div class="order-price">Price: 10 tk</div>
                <div class="order-amount">2x</div>
                <div class="order-totalPrice">Total Price: 20 tk</div>
                <div class="product-order-buttons">
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
                    <button
                        class="delivered-order-button"
                        onClick={handleOrderDelivered}
                    >
                        DELIVERED
                    </button>
                </div>
            </div>
        </li>
    );
}

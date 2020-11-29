import React from "react";

import "./Order.css";

const Order = (props) => {
    return (
        <div class="order-page">
            <h2>YOUR ORDERS</h2>
            <ul class="all-order-items">
                <li class="order-item">
                    <img
                        src="https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/o/n/onion_peyaj_local_3.jpg"
                        alt="peyaj"
                    />
                    <div class="order-details">
                        <div class="order-date">21-12-2020</div>
                        <div class="order-name">ata moyd asuji</div>
                        <div class="order-price">Price: 10$</div>
                        <div class="order-amount">2x</div>
                        <div class="order-totalPrice">Total Price: 20$</div>
                        <div class="product-order-buttons">
                            <button class="accept-order-button">ACCEPT</button>
                            <button class="cancel-order-button">DECLINE</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Order;

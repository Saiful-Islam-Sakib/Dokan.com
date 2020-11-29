import React from "react";
import Data from "./data";

import "./Transaction.css";

const Transaction = (props) => {
    return (
        <div className="transaction">
            <div className="income-info">
                <h1>Your Transactions</h1>
                <div className="income-info__details">
                    <div className="income-info__details-money">
                        <h2>10000 tk</h2>
                        <p>today</p>
                    </div>
                    <div className="income-info__details-money">
                        <h2>10000 tk</h2>
                        <p>last week</p>
                    </div>
                    <div className="income-info__details-money">
                        <h2>10000 tk</h2>
                        <p>last month</p>
                    </div>
                </div>
            </div>
            <div className="history-info">
                <h1>Transaction History</h1>
                <table className="history-table">
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>amount</th>
                        <th>price</th>
                    </tr>
                    {Data.products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.date}</td>
                            <td>{product.name}</td>
                            <td>{product.catagory}</td>
                            <td>{product.amount}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Transaction;

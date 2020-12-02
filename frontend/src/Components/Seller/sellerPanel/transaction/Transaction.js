import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Transaction.css";

const Transaction = (props) => {
    const dispatch = useDispatch();
    const sellerStore = useSelector((state) => state.seller);

    useEffect(() => {
        dispatch({
            type: "LOAD_TRANSACTION",
            sellerId: JSON.parse(localStorage.getItem("seller"))._id,
        });
    }, []);
    return (
        <div className="transaction">
            <div className="income-info">
                <h1>Your Transactions</h1>
                <div className="income-info__details">
                    <div className="income-info__details-money">
                        <h2>
                            {sellerStore.transactions?.length > 0
                                ? sellerStore.transactions
                                      ?.map((p) => p.total_amount)
                                      ?.reduce((a, b) => a + b)
                                : 0}{" "}
                            tk
                        </h2>
                        <p>Total Sell</p>
                    </div>
                    <div className="income-info__details-money">
                        <h2>
                            {sellerStore.transactions?.length > 0
                                ? sellerStore.transactions
                                      ?.map((p) => p.total_amount)
                                      ?.reduce((a, b) => a + b) * 0.05
                                : 0}{" "}
                            tk
                        </h2>
                        <p>(5%) Commotion of DOKAN.com</p>
                    </div>
                </div>
            </div>
            <div className="history-info">
                <h1>Transaction History</h1>
                <table className="history-table">
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>amount</th>
                        <th>price</th>
                    </tr>
                    {sellerStore.transactions?.map((product, index) => (
                        <tr key={index}>
                            <td>{new Date(product.date).toGMTString()}</td>
                            <td>{product.p_name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.total_amount / product.quantity}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Transaction;

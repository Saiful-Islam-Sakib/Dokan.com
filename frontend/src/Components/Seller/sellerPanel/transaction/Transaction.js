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
                    {/* {sellerStore.transactions?.map((product, index) => (
                        <tr key={index}>
                            <td>{product.date}</td>
                            <td>{product.name}</td>
                            <td>{product.catagory}</td>
                            <td>{product.amount}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))} */}
                </table>
            </div>
        </div>
    );
};

export default Transaction;

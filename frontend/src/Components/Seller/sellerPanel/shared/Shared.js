import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    Link,
    useHistory,
} from "react-router-dom";

import Products from "../yourProducts/Products";
import AddProduct from "../addProduct/AddProduct";
import Order from "../order/Order";
import Transaction from "../transaction/Transaction";
import Profile from "../profile/Profile";

import "./Shared.css";
import { useDispatch } from "react-redux";

const Shared = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sidebarMenu = () => {
        document.querySelector(".sidebar").classList.toggle("add__sidebar");
        document.querySelector(".backdrop").classList.toggle("add__backdrop");
    };
    const handleLogOut = () => {
        sidebarMenu();
        localStorage.clear();
        sessionStorage.clear();

        history.push("/");
        window.location.reload(false);
    };

    useEffect(() => {
        dispatch({
            type: "LOAD_SELLER_STATE",
            //seller: JSON.parse(localStorage.getItem("seller")),
        });
    }, []);

    return (
        <Router>
            <div className="backdrop" onClick={sidebarMenu}></div>
            <div className="grid-container">
                <header className="header">
                    <button className="toggle-button" onClick={sidebarMenu}>
                        &#9776;
                    </button>
                    <h2>Dokan.com</h2>
                </header>
                <section className="all-divs">
                    <aside className="sidebar">
                        <h2>Seller Panel</h2>
                        <ul>
                            <li>
                                <Link to="/seller-panel" onClick={sidebarMenu}>
                                    <i className="fas fa-home"></i>YOUR PRODUCTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/seller-panel/add-product"
                                    onClick={sidebarMenu}
                                >
                                    <i className="fas fa-shopping-cart"></i>ADD
                                    PRODUCTS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/seller-panel/orders"
                                    onClick={sidebarMenu}
                                >
                                    <i className="fas fa-shopping-bag"></i>
                                    ORDERS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/seller-panel/transaction"
                                    onClick={sidebarMenu}
                                >
                                    <i className="fas fa-project-diagram"></i>
                                    TRANSACTIONS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/seller-panel/profile"
                                    onClick={sidebarMenu}
                                >
                                    <i className="fas fa-user"></i>PROFILE
                                </Link>
                            </li>
                            <li>
                                <Link to="/seller-panel" onClick={handleLogOut}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    LOGOUT
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <section className="main">
                        <Switch>
                            <Route path="/seller-panel/" exact>
                                <Products />
                            </Route>
                            <Route path="/seller-panel/add-product" exact>
                                <AddProduct />
                            </Route>
                            <Route path="/seller-panel/orders" exact>
                                <Order />
                            </Route>
                            <Route path="/seller-panel/transaction" exact>
                                <Transaction />
                            </Route>
                            <Route path="/seller-panel/profile" exact>
                                <Profile />
                            </Route>
                            <Redirect to="/seller-panel/" />
                        </Switch>
                    </section>
                </section>
            </div>
        </Router>
    );
};

export default Shared;

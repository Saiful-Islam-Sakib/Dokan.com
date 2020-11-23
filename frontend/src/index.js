
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
//import { Provider } from "react-redux";
//import store from "./store";
import { createStore } from "redux";
=======

import { Provider } from "react-redux";
import store from "./Redux/Store/index";

window.store = store;
>>>>>>> ff1ee5c58d99a069250b5b7050f759eb4e1ef95d

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <App />
        </React.Fragment>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 

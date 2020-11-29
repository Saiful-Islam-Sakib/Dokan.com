import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleProductOrderHistory from "./SingleProductOrderHistory";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: "FETCH_ORDER_HISTORY",
        });
    }, []);

    let orderHistory = JSON.parse(sessionStorage.getItem("orderHistory"));

    return (
        <div className={classes.root}>
            {orderHistory?.map((product, index) => (
                <SingleProductOrderHistory
                    key={index}
                    product={product}
                ></SingleProductOrderHistory>
            ))}
        </div>
    );
}

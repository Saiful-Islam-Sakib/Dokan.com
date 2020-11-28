import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import AddressForm from "./AddressForm";
import Review from "./Review";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ["Shipping address", "Review your order"];

export default function Checkout() {
    const classes = useStyles();
    const fullStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [activeStep, setActiveStep] = React.useState(0);

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm />;
            case 1:
                return <Review />;
            default:
                throw new Error("Unknown step");
        }
    }

    const handleNext = async (event) => {
        event.preventDefault();
        if (localStorage.getItem("deliveryAddress") != null) {
            setActiveStep(activeStep + 1);
        }

        if (activeStep + 1 == 2) {
            let userId = JSON.parse(localStorage.getItem("user"))._id;
            let quantity = fullStore.quantity;
            let productId = fullStore.cart.map((p) => p.id);
            let amount = fullStore.cart
                .map((p) => p.price)
                .map((p, index) => fullStore.quantity[index] * p);
            let delveryAddress = localStorage.getItem("deliveryAddress");

            try {
                const res = await fetch(
                    "http://localhost:5000/dokan.com/order/customer/newOrder",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            p_id: productId,
                            quantity: quantity,
                            total_amount: amount,
                            c_id: userId,
                            delivery_address: delveryAddress,
                        }),
                    }
                );

                if (res.status == 201) {
                    dispatch({
                        type: "CHECKOUT",
                    });

                    localStorage.removeItem("deliveryAddress");
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        localStorage.removeItem("deliveryAddress");
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={classes.stepper}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your orders are placed. We will send you
                                    updates these orders.
                                </Typography>
                                <div style={{ marginBottom: "15%" }}></div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <div className={classes.buttons}>
                                    {activeStep !== 0 && (
                                        <Button
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1
                                            ? "Place order"
                                            : "Next"}
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </main>
        </React.Fragment>
    );
}

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.default,
    },
}));

export default function AlertDialog() {
    const fullStore = useSelector((store) => store.auth);
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                <ShoppingBasketIcon></ShoppingBasketIcon>
            </Button>
            <Dialog
                open={open}
                fullWidth={true}
                maxWidth="md"
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <List>
                        <ListItem>
                            <ListItemText
                                disableTypography={true}
                                primary="Total Product"
                                secondary={
                                    <Typography>
                                        {"=> " +
                                            fullStore.quantity?.reduce(
                                                function (a, b) {
                                                    return a + b;
                                                },
                                                0
                                            )}
                                    </Typography>
                                }
                            />
                            <Divider
                                variant="middle"
                                orientation="vertical"
                                flexItem="true"
                            ></Divider>
                            <ListItemText
                                disableTypography={true}
                                primary="Total Amount"
                                secondary={
                                    <Typography>
                                        {"=> " +
                                            fullStore.quantity?.reduce(
                                                function (r, a, i) {
                                                    return (
                                                        r +
                                                        a *
                                                            fullStore.cart[i][
                                                                "price"
                                                            ]
                                                    );
                                                },
                                                0
                                            ) +
                                            " tk"}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    </List>
                </DialogTitle>
                <Divider></Divider>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <List className={classes.root}>
                            {fullStore.cart.map((product, index) => (
                                <>
                                    <CartProduct
                                        product={product}
                                        quantity={fullStore.quantity[index]}
                                        key={index}
                                    ></CartProduct>
                                    <Divider variant="middle"></Divider>
                                </>
                            ))}
                        </List>
                    </DialogContentText>
                </DialogContent>
                <Divider></Divider>
                <DialogActions>
                    <Button
                        disabled={
                            fullStore.cart?.length > 0 &&
                            fullStore.quantity?.reduce(function (r, a, i) {
                                return r + a * fullStore.cart[i]["price"];
                            }, 0) > 50
                                ? false
                                : true
                        }
                        color="primary"
                        variant="outlined"
                        onClick={() => {
                            setOpen(false);
                            if (localStorage.getItem("user")?.length > 0) {
                                history.push("/checkout");
                            } else {
                                history.push("/signIn");
                            }
                        }}
                    >
                        Checkout
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

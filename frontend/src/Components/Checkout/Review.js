import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review() {
    const classes = useStyles();
    const fullStore = useSelector((state) => state.auth);

    let products = fullStore.cart;
    let addresses = localStorage.getItem("deliveryAddress");
    let quantity = fullStore.quantity;
    let userName =
        JSON.parse(localStorage.getItem("user")).f_name +
        " " +
        JSON.parse(localStorage.getItem("user")).l_name;
    let totalAmmount = fullStore.cart
        .map((p) => p.price)
        .map((p, index) => fullStore.quantity[index] * p)
        .reduce((a, b) => {
            return a + b;
        }, 0);

    let deleveryCost = [...new Set(products.map((p) => p.s_id))].length * 10;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <Divider></Divider>
            <List disablePadding>
                {products.map((product, index) => (
                    <ListItem className={classes.listItem} key={product.id}>
                        <ListItemText
                            primary={product.name}
                            secondary={product.shop_name}
                        />
                        <Typography variant="body2">
                            {quantity[index]}
                        </Typography>
                        <Typography
                            variant="body2"
                            style={{ marginLeft: 10, marginRight: 10 }}
                        >
                            x
                        </Typography>
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                ))}
                <Divider></Divider>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {"(delevery Cost) " +
                            deleveryCost +
                            " + " +
                            totalAmmount}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Shipping details:
                    </Typography>
                    <Divider></Divider>
                    <Typography gutterBottom>{`To: ${userName}`}</Typography>
                    <Typography gutterBottom>
                        {`Address: ${addresses}`}
                    </Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Payment details:
                    </Typography>
                    <Divider></Divider>
                    <Grid container>
                        <Typography gutterBottom>Cash on Delivery</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

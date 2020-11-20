import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";

const products = [
    { name: "Product 1", desc: "A nice thing", price: 9.99, quantity: 1 },
    { name: "Product 2", desc: "Another thing", price: 3.45, quantity: 1 },
    {
        name: "Product 3",
        desc: "Something else",
        price: 6.51,
        quantity: 1,
    },
    {
        name: "Product 4",
        desc: "Best thing of all",
        price: 14.11,
        quantity: 1,
    },
];
const addresses = [
    "999/a",
    "sssssskkkkkk",
    "ddddd",
    "cccccccccc",
    "ddddd-9999",
];

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

function totalAmount() {
    let total = 0;

    for (let each of products) {
        total = total + each.quantity * each.price;
    }
    return total;
}

export default function Review() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <Divider></Divider>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText
                            primary={product.name}
                            secondary={product.desc}
                        />
                        <Typography variant="body2">
                            {product.quantity}
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
                        {totalAmount()}
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
                        Shipping:
                    </Typography>
                    <Divider></Divider>
                    <Typography gutterBottom>{"buyer name"}</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
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

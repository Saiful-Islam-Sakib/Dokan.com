import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const innerCardStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        maxWidth: 150,
        margin: 10,
    },
    media: {
        height: 150,
        objectFit: "fill",
    },
});

export default function SmallCard({ product }) {
    const classes2 = innerCardStyle();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSmallCard = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch(
                "http://localhost:5000/dokan.com/products/productdetails/" +
                    product.id
            );
            const data = await res.json();

            dispatch({
                type: "SELECTED_PRODUCT",
                product: product,
                comment: data.data.comments,
            });
        } catch (err) {
            console.log(err);
        }

        history.push("/singleProduct");
    };

    return (
        <Card className={classes2.root} variant="outlined">
            <CardActionArea onClick={handleSmallCard}>
                <CardMedia
                    component="img"
                    className={classes2.media}
                    image={product.img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" align="center">
                        {product.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                    >
                        {product.price + " tk"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

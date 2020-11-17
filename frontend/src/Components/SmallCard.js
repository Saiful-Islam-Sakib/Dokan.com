import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const innerCardStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 150,
    },
});

export default function SmallCard() {
    const classes2 = innerCardStyle();

    return (
        <Card className={classes2.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    className={classes2.media}
                    image="https://image.freepik.com/free-vector/reusable-fabric-eco-friendly-bag-with-groceries-inside-bread-tomatoes-pumpkin_1268-15177.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="caption" align="center">
                        name of the product
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                    >
                        $100
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

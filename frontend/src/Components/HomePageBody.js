import React from "react";
import OfferSlider from "./OfferSlider";
import ConsumerFood from "./Consumer_food";
import HealthCare from "./Health&Care";
import Toiletries from "./Toiletries";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
    },
    paper: {
        maxWidth: 300,
        minHeight: 1000,
        objectFit: "fill",
    },
    middleContainer: {
        flexGrow: 1,
    },
}));

export default function HomePageBody() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {window.screen.width >= 1000 ? (
                <>
                    <Card style={{ marginLeft: 20 }}>
                        <CardMedia
                            component="img"
                            className={classes.paper}
                            image={
                                "https://images.all-free-download.com/images/graphiclarge/summer_sale_poster_luxuriant_leaves_decor_6846430.jpg"
                            }
                        />
                    </Card>
                    <Container
                        maxWidth="lg"
                        className={classes.middleContainer}
                    >
                        <OfferSlider></OfferSlider>
                        <ConsumerFood></ConsumerFood>
                        <HealthCare></HealthCare>
                        <Toiletries></Toiletries>
                    </Container>
                    <Card style={{ marginRight: 20 }}>
                        <CardMedia
                            component="img"
                            className={classes.paper}
                            image={
                                "https://images.all-free-download.com/images/graphiclarge/summer_sale_poster_luxuriant_leaves_decor_6846430.jpg"
                            }
                        />
                    </Card>
                </>
            ) : (
                <>
                    <Container maxWidth="lg">
                        <OfferSlider></OfferSlider>
                        <ConsumerFood></ConsumerFood>
                        <HealthCare></HealthCare>
                        <Toiletries></Toiletries>
                    </Container>
                </>
            )}
        </div>
    );
}

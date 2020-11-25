import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import SmallCard from "./SmallCard";
import { Button, CardActions, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const fullStore = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div style={{ marginBottom: 50 }}>
            <Typography variant="h5" gutterBottom component="p">
                Consumer Food
            </Typography>
            <Card>
                <Card className={classes.root} variant="outlined">
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                    <SmallCard></SmallCard>
                </Card>
                <CardActions
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        size="small"
                        onClick={() => {
                            let selectedCategoryProducts = JSON.parse(
                                sessionStorage.getItem("allProduct")
                            ).filter((p) => p.category == "consumerFood");

                            dispatch({
                                type: "SELECTED_SUB_CAT_PRODUCT",
                                product: selectedCategoryProducts,
                            });

                            history.push("/productList");
                        }}
                    >
                        more
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

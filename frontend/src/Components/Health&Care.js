import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import SmallCard from "./SmallCard";
import { Button, CardActions, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
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
    const fullStore = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch({
            type: "HEALTH_CARE_CAT",
        });
    }, []);

    return (
        <div style={{ marginBottom: 50 }}>
            <Typography variant="h5" gutterBottom component="p">
                {"Health & Care"}
            </Typography>
            <Card>
                <Card className={classes.root} variant="outlined">
                    {fullStore.healthCareCat?.map((product, index) => (
                        <SmallCard product={product} key={index}></SmallCard>
                    ))}
                </Card>
                <CardActions
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        size="small"
                        onclick={() => {
                            let selectedCategoryProducts = JSON.parse(
                                sessionStorage.getItem("allProduct")
                            ).filter((p) => p.category == "healthCare");

                            dispatch({
                                type: "SELECTED_SUB_CAT_PRODUCT",
                                product: selectedCategoryProducts,
                            });

                            if (selectedCategoryProducts.length > 0) {
                                history.push("/productList");
                            }
                        }}
                    >
                        more
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

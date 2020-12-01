import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Divider,
    InputBase,
    makeStyles,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const innerCardStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        maxWidth: 180,
        margin: 10,
    },
    media: {
        height: 150,
        maxHeight: "20vh",
        objectFit: "fill",
    },
});

export default function ProductCard(props) {
    const classes2 = innerCardStyle();
    const history = useHistory();
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(1);

    const handleAddToCart = (event) => {
        dispatch({
            type: "ADD_TO_CART",
            item: props.product,
            quantity: value,
        });
        setValue(1);
    };

    return (
        <Card className={classes2.root} variant="outlined">
            <CardActionArea
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                onClick={async (event) => {
                    event.preventDefault();

                    try {
                        const res = await fetch(
                            "http://localhost:5000/dokan.com/products/productdetails/" +
                                props.product.id
                        );
                        const data = await res.json();

                        dispatch({
                            type: "SELECTED_PRODUCT",
                            product: data.data,
                            comment: data.data.comments,
                        });
                    } catch (err) {
                        console.log(err);
                    }

                    history.push("/singleProduct");
                }}
            >
                <CardMedia
                    component="img"
                    className={classes2.media}
                    image={props.product.img?.slice(
                        2,
                        props.product.img.length
                    )}
                    title={props.product.name}
                />
                <CardContent>
                    <Typography variant="caption" align="center">
                        {props.product.name}
                    </Typography>
                    <Typography variant="caption" component="p" align="center">
                        {props.product.shop_name}
                    </Typography>
                    <Typography align="center">
                        <Rating
                            size="small"
                            readOnly
                            name="customized-empty"
                            defaultValue={props.product.rating}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                    >
                        {props.product.price + " tk"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider></Divider>
            <div
                style={{
                    display: "flex",
                }}
            >
                <Button
                    id="add"
                    onClick={() => {
                        setValue(value + 1);
                    }}
                >
                    +
                </Button>
                <Divider orientation="vertical" />
                <InputBase
                    value={value}
                    inputProps={{
                        "aria-label": "naked",
                        style: {
                            textAlign: "center",
                        },
                    }}
                />
                <Divider orientation="vertical" />
                <Button
                    id="sub"
                    onClick={() => {
                        if (value > 1) {
                            setValue(value - 1);
                        }
                    }}
                >
                    -
                </Button>
            </div>
            <Divider></Divider>
            <Button onClick={handleAddToCart}>Add</Button>
        </Card>
    );
}

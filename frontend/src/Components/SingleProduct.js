import React, { useEffect } from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    InputBase,
    Link,
    makeStyles,
    OutlinedInput,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import TabSingleProduct from "./TabSingleProduct";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 8,
    },
    cardRoot: {
        maxWidth: 100,
        marginBottom: 20,
    },
    cardMedia: {
        maxHeight: 80,
        objectFit: "fill",
    },
    selectedCard: {
        maxWidth: 400,
    },
    selectedCardMedia: {
        height: 350,
        objectFit: "fill",
    },
}));

export default function SingleProduct() {
    const classes = useStyles();
    const fullStore = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const selectedProduct = fullStore.selectedProduct;

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/dokan.com/products/productdetails/" +
                        selectedProduct.id
                );
                const data = await res.json();
                console.log(data.data);
                dispatch({
                    type: "SELECTED_PRODUCT",
                    product: data.data,
                    comment: data.data.comments,
                });
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const [value, setValue] = React.useState(1);
    const [selectedImage, setImage] = React.useState(
        selectedProduct.img?.slice(2, selectedProduct.img.length)
    );

    const handleChange = () => (event) => {
        setValue(event.target.value);
    };

    return (
        <Container maxWidth="lg">
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={4} sm={2}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        className={classes.cardMedia}
                                        image={selectedProduct.img?.slice(
                                            2,
                                            selectedProduct.img.length
                                        )}
                                        onClick={() => {
                                            setImage(
                                                selectedProduct.img.slice(
                                                    2,
                                                    selectedProduct.img.length
                                                )
                                            );
                                        }}
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        className={classes.cardMedia}
                                        image={selectedProduct.img?.slice(
                                            2,
                                            selectedProduct.img.length
                                        )}
                                        onClick={() => {
                                            setImage(
                                                selectedProduct.img.slice(
                                                    2,
                                                    selectedProduct.img.length
                                                )
                                            );
                                        }}
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        className={classes.cardMedia}
                                        image={selectedProduct.img?.slice(
                                            2,
                                            selectedProduct.img.length
                                        )}
                                        onClick={() => {
                                            setImage(
                                                selectedProduct.img.slice(
                                                    2,
                                                    selectedProduct.img.length
                                                )
                                            );
                                        }}
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={8} sm={6}>
                        <Card className={classes.selectedCard}>
                            <CardActionArea>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        className={classes.selectedCardMedia}
                                        image={selectedImage}
                                    />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography
                                    color="textSecondary"
                                    style={{ fontSize: 12 }}
                                >
                                    {selectedProduct.category}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {selectedProduct.name}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    <Link href="#vendor" color="inherit">
                                        by : {selectedProduct.shop_name}
                                    </Link>
                                </Typography>
                                <div style={{ display: "flex" }}>
                                    <Typography
                                        variant="inherit"
                                        component="h3"
                                    >
                                        {selectedProduct.rating
                                            ? selectedProduct.rating.toPrecision(
                                                  2
                                              ) + "/5"
                                            : 0}
                                    </Typography>

                                    <div
                                        style={{
                                            display: "flex",
                                            marginRight: 5,
                                        }}
                                    ></div>
                                    <Rating
                                        name="read-only"
                                        value={
                                            selectedProduct.rating
                                                ? selectedProduct.rating
                                                : 0
                                        }
                                        readOnly
                                        precision={0.5}
                                        max={5}
                                    />
                                </div>
                                <div style={{ marginBottom: 10 }}>
                                    <Divider></Divider>
                                </div>
                                <Typography variant="body2" component="p">
                                    {selectedProduct.productDetails
                                        ? selectedProduct.productDetails
                                        : selectedProduct.name}
                                </Typography>
                                <div style={{ marginBottom: 10 }}></div>
                                <Typography variant="h6" component="h2">
                                    Price : {selectedProduct.price + " tk"}
                                </Typography>
                            </CardContent>
                            <CardContent
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    id="add"
                                    variant="outlined"
                                    onClick={() => {
                                        setValue(value + 1);
                                    }}
                                >
                                    +
                                </Button>
                                <div
                                    style={{
                                        padding: 0,
                                        margin: 0,
                                        border: "1px solid gray",
                                        borderRadius: "5px",
                                    }}
                                >
                                    <InputBase
                                        defaultValue={1}
                                        value={value}
                                        inputProps={{
                                            "aria-label": "naked",
                                            style: {
                                                textAlign: "center",
                                            },
                                        }}
                                    />
                                </div>
                                <Button
                                    id="sub"
                                    variant="outlined"
                                    onClick={() => {
                                        if (value > 1) {
                                            setValue(value - 1);
                                        }
                                    }}
                                >
                                    -
                                </Button>
                            </CardContent>
                            <CardContent>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                    color="primary"
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            item: selectedProduct,
                                            quantity: value,
                                        });
                                        setValue(1);
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <TabSingleProduct></TabSingleProduct>
        </Container>
    );
}

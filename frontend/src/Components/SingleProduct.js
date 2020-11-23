import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Link,
    makeStyles,
    OutlinedInput,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import TabSingleProduct from "./TabSingleProduct";

import i1 from "../image/fresh_chinigura.png";
import i2 from "../image/miniket_rice.png";
import i3 from "../image/Najirshail_rice.png";

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

let selectedProduct = JSON.parse(sessionStorage.getItem("selectedProduct"));
console.log(selectedProduct);

export default function SingleProduct() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [selectedImage, setImage] = React.useState(i1);

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
                                        image={i1}
                                        onClick={() => {
                                            setImage(i1);
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
                                        image={i2}
                                        onClick={() => {
                                            setImage(i2);
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
                                        image={i3}
                                        onClick={() => {
                                            setImage(i3);
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
                                        by : {selectedProduct.s_id}
                                    </Link>
                                </Typography>
                                <div style={{ display: "flex" }}>
                                    {/* <Typography variant="h6"> */}
                                    {/* 4.4 */}
                                    {/* rating thik korte hobe rating field nai database a  */}
                                    {/* {selectedProduct.rating} */}
                                    {/* </Typography> */}
                                    <div
                                        style={{
                                            display: "flex",
                                            marginRight: 5,
                                        }}
                                    ></div>
                                    <Rating
                                        name="read-only"
                                        //value={selectedProduct.rating} // avg of star that rounds automatically
                                        value={4.4}
                                        readOnly
                                        precision={0.5}
                                        max={5}
                                    />
                                </div>
                                <div style={{ marginBottom: 10 }}>
                                    <Divider></Divider>
                                </div>
                                <Typography variant="body2" component="p">
                                    product details
                                    {/* product details thik kora lagbe, product detals field nai database a */}
                                    {selectedProduct.productDetails}
                                    <br />
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    Price : {selectedProduct.price + " tk"}
                                </Typography>
                            </CardContent>
                            <CardContent style={{ display: "flex" }}>
                                <Button
                                    id="add"
                                    variant="outlined"
                                    onClick={() => {
                                        setValue(value + 1);
                                    }}
                                >
                                    +
                                </Button>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    defaultValue={1}
                                    type="number"
                                    inputProps={{
                                        min: 1,
                                        style: { textAlign: "center" },
                                    }}
                                    value={value}
                                    onChange={handleChange()}
                                />
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

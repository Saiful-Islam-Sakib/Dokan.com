import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Link,
    makeStyles,
    OutlinedInput,
    Typography,
    Paper,
    Tabs,
    Tab,
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
        height: 80,
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
                                    Category
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Full Name of a product
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    <Link href="#vendor" color="inherit">
                                        by : Vendor Name
                                    </Link>
                                </Typography>
                                <div style={{ display: "flex" }}>
                                    <Typography variant="h6">4.4</Typography>
                                    <div
                                        style={{
                                            display: "flex",
                                            marginRight: 5,
                                        }}
                                    ></div>
                                    <Rating
                                        name="read-only"
                                        value={4} // avg of star
                                        readOnly
                                        size="large"
                                        max="1"
                                    />
                                </div>
                                <div style={{ marginBottom: 10 }}>
                                    <Divider></Divider>
                                </div>
                                <Typography variant="body2" component="p">
                                    product details
                                    <br />
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    Price : $100
                                </Typography>
                            </CardContent>
                            <CardActions>
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
                                        if (value > 0) {
                                            setValue(value - 1);
                                        }
                                    }}
                                >
                                    -
                                </Button>
                            </CardActions>
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

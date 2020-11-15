import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Link,
    makeStyles,
    OutlinedInput,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import i1 from "../image/fresh_chinigura.png";
import i2 from "../image/miniket_rice.png";
import i3 from "../image/Najirshail_rice.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
    const [value, setValue] = React.useState();
    const handleChange = () => (event) => {
        setValue(event.target.value);
    };

    return (
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
                                    image={i1}
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
                                <Link href="#" color="inherit">
                                    by : Vendor Name
                                </Link>
                            </Typography>
                            <Rating
                                name="read-only"
                                value={4}
                                readOnly
                                size="small"
                            />
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
                            <Button variant="outlined">+</Button>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                defaultValue={1}
                                type="number"
                                inputProps={{
                                    min: 1,
                                    style: { textAlign: "center" },
                                }}
                                value={value}
                                onChange={handleChange("amount")}
                            />
                            <Button variant="outlined">-</Button>
                        </CardActions>
                        <CardContent>
                            <Button variant="contained" color="primary">
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

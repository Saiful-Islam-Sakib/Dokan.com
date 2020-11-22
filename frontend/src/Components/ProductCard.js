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
    },
});

export default function ProductCard(props) {
    const classes2 = innerCardStyle();
    const [value, setValue] = React.useState(1);

    return (
        <Card
            key={props.product.id}
            className={classes2.root}
            variant="outlined"
        >
            <CardActionArea
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <CardMedia
                    component="img"
                    className={classes2.media}
                    image="https://image.freepik.com/free-vector/reusable-fabric-eco-friendly-bag-with-groceries-inside-bread-tomatoes-pumpkin_1268-15177.jpg"
                    title="Contemplative Reptile"
                    style={{
                        maxHeight: "20vh",
                        objectFit: "fill",
                    }}
                />
                <CardContent>
                    <Typography variant="h6" align="center">
                        {props.product.name}
                    </Typography>
                    <Typography variant="caption" component="p" align="center">
                        {props.product.vendor}
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
                        {props.product.price}
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
            <Button>Add</Button>
        </Card>
    );
}

import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Divider,
    FormControl,
    InputBase,
    InputLabel,
    makeStyles,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 10,
        marginBottom: 10,
    },
});

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

const products = [
    { id: 1, name: "name", brand: "brand", vendor: "a", price: 100 },
    { id: 2, name: "name", brand: "brand", vendor: "b", price: 100 },
    { id: 3, name: "name", brand: "brand", vendor: "c", price: 100 },
    { id: 4, name: "name", brand: "brand", vendor: "d", price: 100 },
    { id: 5, name: "name", brand: "brand", vendor: "e", price: 100 },
    { id: 6, name: "name", brand: "brand", vendor: "f", price: 100 },
];

export default function ProductList() {
    const classes = useStyles();
    const classes2 = innerCardStyle();

    const [value, setValue] = React.useState(1);

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sort, setSort] = React.useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Container maxWidth="lg">
            <div style={{ display: "flex" }}>
                <FormControl variant="outlined">
                    <InputLabel id="sortId">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        autoWidth="true"
                        displayEmpty
                        value={sort}
                        onChange={handleChange}
                        label="Sort"
                    >
                        <MenuItem value="">Sort</MenuItem>
                        <MenuItem value={"priceHL"}>
                            {"Price Hight -> Low"}
                        </MenuItem>
                        <MenuItem value={"priceLH"}>
                            {"Price Low -> High"}
                        </MenuItem>
                        <MenuItem value={"ratingHL"}>
                            {"Rating High -> Low"}
                        </MenuItem>
                        <MenuItem value={"ratingLH"}>
                            {"Rating Low -> High"}
                        </MenuItem>
                    </Select>
                </FormControl>
                <div style={{ flexGrow: 1 }}></div>
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
            <div>
                <Paper>
                    <Card className={classes.root} variant="outlined">
                        {products.map((product) => (
                            <Card
                                key={product.id}
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
                                            {"product name"}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            component="p"
                                            align="center"
                                        >
                                            {"vendor name"}
                                        </Typography>
                                        <Typography align="center">
                                            <Rating
                                                size="small"
                                                readOnly
                                                name="customized-empty"
                                                defaultValue={2}
                                                emptyIcon={
                                                    <StarBorderIcon fontSize="inherit" />
                                                }
                                            />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                            align="center"
                                        >
                                            {"$100"}
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
                        ))}
                    </Card>
                </Paper>
            </div>
        </Container>
    );
}

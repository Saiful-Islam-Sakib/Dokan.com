import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
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
        maxWidth: 345,
        margin: 10,
    },
    media: {
        height: 150,
    },
});

export default function ProductList() {
    const classes = useStyles();
    const classes2 = innerCardStyle();

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
                        <Card className={classes2.root} variant="outlined">
                            <CardActionArea>
                                <CardMedia
                                    className={classes2.media}
                                    image="https://image.freepik.com/free-vector/reusable-fabric-eco-friendly-bag-with-groceries-inside-bread-tomatoes-pumpkin_1268-15177.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="caption"
                                        align="center"
                                    >
                                        name of the product
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                        align="center"
                                    >
                                        $100
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Card>
                </Paper>
            </div>
        </Container>
    );
}

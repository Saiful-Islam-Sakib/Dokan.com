import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import {
    Card,
    Container,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Paper,
    Select,
} from "@material-ui/core";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: 10,
        marginBottom: 10,
    },
});

function compareValues(key, order = "asc") {
    return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
    };
}

export default function ProductList() {
    const classes = useStyles();
    const fullStore = useSelector((state) => state.auth);

    // let products = JSON.parse(sessionStorage.getItem("products"));
    let products = fullStore.selectedSubCatProduct;
    console.log(products);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [sort, setSort] = React.useState("");

    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);

        setStart(newPage * rowsPerPage);
        setEnd(newPage * rowsPerPage + rowsPerPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

        setStart(0);
        setEnd(page * rowsPerPage + parseInt(event.target.value, 10));
    };

    const handleChange = (event) => {
        let e = event.target.value;
        setSort(e);
        if (e === "priceLH") {
            products?.sort(compareValues("price", "asc"));
        } else if (e === "priceHL") {
            products?.sort(compareValues("price", "desc"));
        } else if (e === "ratingLH") {
            products?.sort(compareValues("rating", "asc"));
        } else if (e === "ratingHL") {
            products?.sort(compareValues("rating", "desc"));
        }
    };

    return (
        <Container maxWidth="lg">
            <div style={{ display: "flex" }}>
                <FormControl variant="outlined">
                    <InputLabel id="sortId">Sort</InputLabel>
                    <Select
                        labelId="sortLabel"
                        id="sortId"
                        autoWidth={true}
                        displayEmpty
                        value={sort}
                        onChange={handleChange}
                        label="Sort"
                    >
                        <MenuItem value="">Sort</MenuItem>
                        <MenuItem value="priceHL">
                            {"Price Hight -> Low"}
                        </MenuItem>
                        <MenuItem value="priceLH">
                            {"Price Low -> High"}
                        </MenuItem>
                        <MenuItem value="ratingHL">
                            {"Rating High -> Low"}
                        </MenuItem>
                        <MenuItem value="ratingLH">
                            {"Rating Low -> High"}
                        </MenuItem>
                    </Select>
                </FormControl>
                <div style={{ flexGrow: 1 }}></div>
                <TablePagination
                    component="div"
                    count={products
                        ?.length}
                    page={page}
                    onChangePage={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
            <div>
                <Paper>
                    <Card className={classes.root} variant="outlined">
                        {products?.slice(start, end).map((product, index) => (
                            <ProductCard
                                product={product}
                                key={index}
                            ></ProductCard>
                        ))}
                    </Card>
                </Paper>
            </div>
        </Container>
    );
}

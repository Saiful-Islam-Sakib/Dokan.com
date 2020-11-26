import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { useDispatch } from "react-redux";

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {},
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        fontSize: 14,
        padding: "10px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        marginLeft: 10,
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [categories, setCategory] = React.useState("All");

    useEffect(() => {
        dispatch({
            type: "SEARCH_CATEGORY",
            searchCategory: categories,
        });
    }, [categories]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.margin}>
                <Select
                    labelId="categorieslabel"
                    id="categoriesid"
                    value={categories}
                    onChange={handleChange}
                    backgroundColor="white"
                    input={<BootstrapInput />}
                    style={{ backgroundColor: "#ffffff" }}
                >
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"consumerFood"}>Consumer food</MenuItem>
                    <MenuItem value={"toiletries"}>Toletries</MenuItem>
                    <MenuItem value={"healthCare"}>{"Health & Care"}</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

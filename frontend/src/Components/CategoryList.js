import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

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
        ].join(",")
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        marginLeft: 10,
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [categories, setCategory] = React.useState("All");
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
                    <MenuItem value={"toletries"}>Toletries</MenuItem>
                    <MenuItem value={"health&Care"}>Health & Care</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

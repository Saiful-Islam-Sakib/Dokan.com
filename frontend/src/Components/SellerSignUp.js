import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Divider } from "@material-ui/core";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            {"2020 - "}
            {new Date().getFullYear()}
            {", "}
            <Link color="inherit" href="/">
                dokan.com
            </Link>
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const locations = [
    {
        city: "Dhaka",
        zone: [
            { area: "Uttara", place: ["Sector 1", "Sector 2", "Sector 3"] },
            { area: "Mirpur", place: ["Mirpur 1", "Mirpur 2", "Mirpur 3"] },
            { area: "Bashundhara", place: ["Block A", "Block B", "Block C"] },
        ],
    },
    { city: "Chittagong", area: {}, place: {} },
    { city: "Rajshahi", area: {}, place: {} },
    { city: "Sylhet", area: {}, place: {} },
    { city: "Khulna", area: {}, place: {} },
    { city: "Barishal", area: {}, place: {} },
    { city: "Mymensingh", area: {}, place: {} },
    { city: "Rangpur", area: {}, place: {} },
];

const bank = [
    { name: "Brac Bank", branch: ["Gulshan", "Rampura", "Uttara"] },
    { name: "Islami Bank", branch: ["Cantonment", "Mirpur", "Mohakhali"] },
    {
        name: "Dutch-Bangla Bank",
        branch: ["Dhanmondi", "Nobabpur", "Bashundhara"],
    },
];

export default function SignUp() {
    const classes = useStyles();

    const [areaName, setArea] = React.useState([]);
    const [placeName, setPlace] = React.useState([]);
    const [branch, setbranch] = React.useState([]);

    const [sellerCity, setsellercity] = React.useState("");
    const [sellerArea, setsellerarea] = React.useState("");
    const [sellerPlace, setsellerplace] = React.useState("");

    const [shopCity, setshopcity] = React.useState("");
    const [shopArea, setshoparea] = React.useState("");
    const [shopPlace, setshopplace] = React.useState("");

    const [bankName, setbankname] = React.useState("");
    const [bankBranch, setbankbranch] = React.useState("");

    return (
        <Container
            component="main"
            maxWidth="lg"
            style={{ backgroundColor: "white", borderRadius: 10 }}
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <StorefrontRoundedIcon></StorefrontRoundedIcon>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Seller Sign up
                </Typography>
                <form className={classes.form}>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <Grid
                            container
                            spacing={2}
                            style={{ maxWidth: "49%", alignSelf: "flex-start" }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Personal Information:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    type="text"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    type="text"
                                    autoComplete
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number : 01xxxxxxxxx"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="tradeLicenseNumber"
                                    label="Trade License Number"
                                    name="tradeLicenseNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nid"
                                    label="NID Number"
                                    name="nid"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="birthday"
                                    label="Birthday"
                                    name="birthday"
                                    type="date"
                                    defaultValue="1900-12-31"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Own Address:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="sellerlocationCity"
                                    disableClearable
                                    options={locations}
                                    getOptionLabel={(option) => {
                                        return option.city;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="City"
                                            variant="outlined"
                                            id="sellerCity"
                                            name="sellerCity"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setsellercity(option.city);
                                        setArea(option.zone);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="sellerlocationArea"
                                    disableClearable
                                    options={areaName}
                                    getOptionLabel={(option) => {
                                        return option.area;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Area"
                                            variant="outlined"
                                            id="sellerArea"
                                            name="sellerArea"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setsellerarea(option.area);
                                        setPlace(option.place);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="sellerlocationPlace"
                                    disableClearable
                                    options={placeName}
                                    getOptionLabel={(option) => {
                                        return option;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Place"
                                            variant="outlined"
                                            id="sellerPlace"
                                            name="sellerPlace"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setsellerplace(option);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="homeAddress"
                                    label="Home Address"
                                    name="homeAddress"
                                />
                            </Grid>
                        </Grid>
                        <Divider
                            orientation="vertical"
                            flexItem
                            variant="middle"
                        ></Divider>
                        <Grid
                            container
                            spacing={2}
                            style={{ maxWidth: "49%", alignSelf: "flex-start" }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Bank Information:
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    id="bankName"
                                    disableClearable
                                    options={bank}
                                    getOptionLabel={(option) => {
                                        return option.name;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Bank"
                                            variant="outlined"
                                            id="bankName"
                                            name="bankName"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setbankname(option.name);
                                        setbranch(option.branch);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Autocomplete
                                    id="branchName"
                                    disableClearable
                                    options={branch}
                                    getOptionLabel={(option) => {
                                        return option;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Branch"
                                            variant="outlined"
                                            id="branchName"
                                            name="branchName"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setbankbranch(option);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="bankAccountName"
                                    label="Account Name"
                                    name="bankAccountName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="bankAccountNumber"
                                    label="Account Number"
                                    name="bankAccountNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Shop Information:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="shopName"
                                    label="Shop Name"
                                    name="shopName"
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="shoplocationCity"
                                    disableClearable
                                    options={locations}
                                    getOptionLabel={(option) => {
                                        return option.city;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="City"
                                            variant="outlined"
                                            id="shopCity"
                                            name="shopCity"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setshopcity(option.city);
                                        setArea(option.zone);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="shoplocationArea"
                                    disableClearable
                                    options={areaName}
                                    getOptionLabel={(option) => {
                                        return option.area;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Area"
                                            variant="outlined"
                                            id="shopArea"
                                            name="shopArea"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setshoparea(option.area);
                                        setPlace(option.place);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Autocomplete
                                    id="shoplocationPlace"
                                    disableClearable
                                    options={placeName}
                                    getOptionLabel={(option) => {
                                        return option;
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Place"
                                            variant="outlined"
                                            id="shopPlace"
                                            name="shopPlace"
                                            fullWidth
                                            required
                                        />
                                    )}
                                    onChange={(event, option) => {
                                        setshopplace(option);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="shopAreaPC"
                                    label="Shop Area PC"
                                    name="shopAreaPC"
                                    type="tel"
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <Container
                        maxWidth="sm"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 30,
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    Registration:
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    autoComplete
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="retype-password"
                                    label="Retype-Password"
                                    type="password"
                                    id="retype-password"
                                    autoComplete="retype-password"
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link href="/sellerSignIn" variant="body2">
                                        Already have a Seller account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
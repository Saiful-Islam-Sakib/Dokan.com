import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Alert from "@material-ui/lab/Alert";

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
        backgroundColor: theme.palette.secondary.main,
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

export default function SignUp() {
    const classes = useStyles();

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [birthday, setBirthday] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePassword, setRePassword] = React.useState("");
    const [gender, setGender] = React.useState("");

    const [signUpStatus, setSignUpStatus] = React.useState(false);

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (password === rePassword) {
            // insert data into database
            try {
                const res = await fetch(
                    "http://localhost:5000/dokan.com/customer/signup",
                    {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({
                            f_name: firstName,
                            l_name: lastName,
                            email: email,
                            phone: phoneNumber,
                            gender: gender,
                            birthday: birthday,
                            address: address,
                            password: password,
                        }),
                    }
                );
                const data = await res.json();
                console.log(data);
                setSignUpStatus(true);
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
            style={{ backgroundColor: "white", borderRadius: 10 }}
        >
            <CssBaseline />
            {signUpStatus ? (
                <div>
                    <Alert style={{ maxWidth: "100%" }}>
                        <Typography>
                            {"!!!   Sign Up Successful   !!!"}
                        </Typography>
                        <a href="/signIn">Sign In</a>
                    </Alert>
                </div>
            ) : (
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    type="text"
                                    label="First Name"
                                    autoFocus
                                    autoComplete="First name"
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}
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
                                    autoComplete="Last Name"
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="genderLabel">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="genderLabel"
                                        id="genderid"
                                        value={gender}
                                        onChange={(event) => {
                                            setGender(event.target.value);
                                        }}
                                        label="Gender"
                                        name="gender"
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>
                                            Female
                                        </MenuItem>
                                        <MenuItem value={"Other"}>
                                            Others
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="birthday"
                                    label="Birthday"
                                    name="birthday"
                                    type="date"
                                    defaultValue="2000-12-31"
                                    autoComplete="Birthday"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => {
                                        setBirthday(event.target.value);
                                    }}
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
                                    autoComplete="Phone Number"
                                    onChange={(event) => {
                                        setPhoneNumber(event.target.value);
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
                                    autoComplete="Addresses"
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                    }}
                                />
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
                                    autoComplete="Email"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
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
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
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
                                    id="retypepassword"
                                    autoComplete="retype-password"
                                    onChange={(event) => {
                                        setRePassword(event.target.value);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            )}
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

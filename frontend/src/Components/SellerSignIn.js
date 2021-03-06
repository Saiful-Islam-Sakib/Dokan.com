import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const sellerStore = useSelector((state) => state.seller);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorStatus, setErrorStatus] = React.useState(false);
    const [rememberMe, setRememberMe] = React.useState(false);

    const handleSignIn = async (event) => {
        event.preventDefault();

        var res = "";
        const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(mailformat)) {
            res = await fetch("http://localhost:5000/dokan.com/seller/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
        } else {
            res = await fetch("http://localhost:5000/dokan.com/seller/login", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    phone: email,
                    password: password,
                }),
            });
        }

        if (res.status === 201) {
            const data = await res.json();
            console.log(data);

            localStorage.setItem("seller", JSON.stringify(data.data));

            history.push("/seller-panel/");
            window.location.reload(false);
        } else {
            setErrorStatus(true);
            setPassword("");
        }
    };

    return (
        <Container
            component="main"
            maxWidth="sm"
            style={{ backgroundColor: "white", borderRadius: 10 }}
        >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <StorefrontRoundedIcon></StorefrontRoundedIcon>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Seller Sign in
                </Typography>
                <form className={classes.form}>
                    <TextField
                        error={errorStatus ? true : false}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="sellerEmail"
                        label="Email / Phone Number"
                        name="sellerEmail"
                        type="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <TextField
                        error={errorStatus ? true : false}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="sellerPassword"
                        label="Password"
                        type="password"
                        id="sellerPassword"
                        autoComplete="password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                color="primary"
                                checked={true}
                                onChange={(event) => {
                                    setRememberMe(event.target.checked);
                                }}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        disabled={
                            email.length > 0 && password.length > 0
                                ? false
                                : true
                        }
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/sellerSignUp" variant="body2">
                                {"Don't have a Seller account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
export default SignIn;

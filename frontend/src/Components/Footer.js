import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Container, CssBaseline } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor: "#131921",
        color: "white",
    },
}));

export default function StickyFooter() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="center">
                        {"Copyright © "}
                        <Link
                            color="inherit"
                            href="#/"
                            onClick={() => {
                                dispatch({
                                    type: "UPDATE_PRODUCT",
                                });
                                history.push("/");
                            }}
                        >
                            www.dokan.com
                        </Link>
                        {" (2020 - "}
                        {new Date().getFullYear()}
                        {")."}
                        <Link
                            color="secondary"
                            href="#/contactUs"
                            onClick={() => {
                                dispatch({
                                    type: "UPDATE_PRODUCT",
                                });
                                history.push("/contactUs");
                            }}
                        >
                            Contact or Report to us
                        </Link>
                    </Typography>
                </Container>
            </footer>
        </div>
    );
}

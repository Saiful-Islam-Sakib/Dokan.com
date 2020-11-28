import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import { Container, CssBaseline } from "@material-ui/core";

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

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1" align="center">
                        {"Copyright © "}
                        <Link color="inherit" href="/">
                            www.dokan.com
                        </Link>
                        {" (2020 - "}
                        {new Date().getFullYear()}
                        {")."}
                    </Typography>
                </Container>
            </footer>
        </div>
    );
}

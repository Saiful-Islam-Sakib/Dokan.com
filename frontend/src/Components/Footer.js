import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "gray",
        alignItems: "center",
        minHeight: 60,
        marginTop: "15%",
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body1" color="textSecondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="/">
                    dokan.com
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </div>
    );
}

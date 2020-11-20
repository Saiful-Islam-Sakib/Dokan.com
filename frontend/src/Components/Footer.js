import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#131921",
        color:"white",
        alignItems: "center",
        minHeight: 60,
        marginTop: "15%",
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="body1" align="center">
                {"Copyright © "}
                <Link color="inherit" href="/">
                    www.dokan.com
                </Link>{" (2020 - "}
                {new Date().getFullYear()}
                {")."}
            </Typography>
        </div>
    );
}

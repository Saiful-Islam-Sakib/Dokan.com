import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { Button, OutlinedInput, TextField } from "@material-ui/core";

import avater from "../image/fresh_chinigura.png";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();

    const fullStore = useSelector((state) => state.auth);

    const [value, setValue] = React.useState(0);
    const [RatingValue, setRatingValue] = React.useState(4);
    const [commentBox, setCommentBox] = React.useState("");
    const [error, setError] = React.useState(false);
    const [errormsg, setErrorMsg] = React.useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleCommentSend = async (event) => {
        event.preventDefault();
        if (JSON.parse(localStorage.getItem("user")) != null) {
            if (commentBox.length >= 3) {
                try {
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/customer/product/comment",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                p_id: fullStore.selectedProduct,
                                user_id: JSON.parse(
                                    localStorage.getItem("user")
                                )._id,
                                body: commentBox,
                            }),
                        }
                    );
                    const response = await res.json();
                    console.log(response.status);
                } catch (err) {
                    console.log(err);
                }

                setError(false);
                setErrorMsg("Comment Placed");
            } else {
                setError(true);
                setErrorMsg("Incorrect Entry: try more than 3 letter");
            }
        } else {
            setError(true);
            setErrorMsg("Log In First");
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    aria-label="full width tabs example"
                >
                    <Tab label="Comments" {...a11yProps(0)} />
                    <Tab label="Review" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Typography component="legend" style={{ marginBottom: 8 }}>
                        Comment:
                    </Typography>
                    <form>
                        <TextField
                            error={error}
                            id="commentText"
                            placeholder="empty"
                            required
                            fullWidth
                            multiline
                            rows={5}
                            helperText={errormsg}
                            variant="outlined"
                            style={{ marginBottom: 8 }}
                            onChange={(event) => {
                                setCommentBox(event.target.value);
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                onClick={handleCommentSend}
                            >
                                Send
                            </Button>
                        </div>
                    </form>

                    <div style={{ margin: 16 }}></div>

                    {fullStore.comment?.map((comment, index) => (
                        <SingleComment
                            key={index}
                            comment={comment}
                        ></SingleComment>
                    ))}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Typography component="legend" style={{ marginBottom: 8 }}>
                        Rate This Product
                    </Typography>
                    <form>
                        <Rating
                            name="ratingGiven"
                            value={RatingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                        <div style={{ marginBottom: 8 }}></div>
                        <OutlinedInput
                            id="reviewerName"
                            value={"Name"}
                            readOnly
                            fullWidth
                            multiline
                            style={{ marginBottom: 8 }}
                        />
                        <TextField
                            id="reviewText"
                            placeholder="empty"
                            fullWidth
                            multiline
                            rows={8}
                            variant="outlined"
                            style={{ marginBottom: 8 }}
                        />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                            >
                                Send
                            </Button>
                        </div>
                    </form>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

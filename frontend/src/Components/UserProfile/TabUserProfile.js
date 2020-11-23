import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Container, Grid, TextField } from "@material-ui/core";
import OrderHistory from "./OrderHistory";
import Favorites from "./Favorites";

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
        backgroundColor: "white",
        width: "100%",
    },
    paper: {
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

export default function FullWidthTabs({ userinfo }) {
    const classes = useStyles();
    const theme = useTheme();

    const [value, setValue] = React.useState(0);
    const [profileState, setProfileState] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleEditProfile = () => {
        setProfileState(false);
    };
    const handleSaveProfile = () => {
        console.log("database update");
    };
    const handleCancelProfile = () => {
        setProfileState(true);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="black"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="My Profile" {...a11yProps(0)} />
                    <Tab label="Order History" {...a11yProps(1)} />
                    <Tab label="Favorites" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Container maxWidth="md">
                        <div className={classes.paper}>
                            <form className={classes.form}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="first-name"
                                            name="firstName"
                                            variant="outlined"
                                            fullWidth
                                            id="firstName"
                                            type="text"
                                            label="First Name"
                                            defaultValue={userinfo.f_name}
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            type="text"
                                            autoComplete="last-name"
                                            defaultValue={userinfo.l_name}
                                            disabled={
                                                profileState ? true : false
                                            }
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
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            defaultValue={userinfo.birthday}
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="phoneNumber"
                                            label="Phone Number : 01xxxxxxxxx"
                                            name="phoneNumber"
                                            type="tel"
                                            autoComplete="tel"
                                            defaultValue={userinfo.phone}
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="homeAddress"
                                            label="Primary Address"
                                            name="homeAddress"
                                            autoComplete="Address"
                                            defaultValue={userinfo.address}
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            autoComplete="Email"
                                            defaultValue={userinfo.email}
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="newpassword"
                                            label="Current Password"
                                            type="password"
                                            id="newpassword"
                                            autoComplete="current-password"
                                            helperText={
                                                profileState
                                                    ? ""
                                                    : "** Enter Your Current Password to save the changes."
                                            }
                                            disabled={
                                                profileState ? true : false
                                            }
                                        />
                                    </Grid>
                                </Grid>
                                <div style={{ marginBottom: "1%" }}></div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    {profileState ? (
                                        ""
                                    ) : (
                                        <>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                className={classes.submit}
                                                onClick={handleSaveProfile}
                                            >
                                                Save
                                            </Button>
                                            <div
                                                style={{ marginRight: "1%" }}
                                            ></div>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={handleCancelProfile}
                                            >
                                                Cancel
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </form>
                            {profileState ? (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleEditProfile}
                                >
                                    Edit
                                </Button>
                            ) : (
                                ""
                            )}
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <OrderHistory></OrderHistory>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Favorites></Favorites>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}

import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import Category from "./CategoryDrawer";
import CategoryList from "./CategoryList";
import Link from "@material-ui/core/Link";
import CartList from "./CartList";
import { Breadcrumbs } from "@material-ui/core";
import LocationAlart from "./locationAlert";

const useStyles = makeStyles((theme) => ({
    headerBackground: {
        backgroundColor: "#131921",
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    logoLink: {
        color: "inherit",
        underline: "none",
        variant: "inherit",
    },
}));
const secondHeaderStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "gray",
        flexFlow: "row wrap",
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const secondHeaderClass = secondHeaderStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const onChangeSearchbar = (event) => {
        console.log(event.target.value);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Favorite</MenuItem>
            <MenuItem onClick={handleMenuClose}>Order history</MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="signIn" color="inherit">
                    <Typography>
                        <Link
                            href="/signIn"
                            className={classes.logoLink}
                            style={{ textDecoration: "none" }}
                        >
                            Sign In
                        </Link>
                    </Typography>
                </IconButton>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="cart" color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <CartList></CartList>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.headerBackground}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <Category></Category>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link
                            href="/"
                            className={classes.logoLink}
                            style={{ textDecoration: "none" }}
                        >
                            Dokan.com
                        </Link>
                    </Typography>

                    <div className={classes.grow} />

                    <CategoryList></CategoryList>

                    <div className={classes.search} style={{ flexGrow: 2 }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                            onChange={onChangeSearchbar}
                            fullWidth
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="signIn" color="inherit">
                            <Typography>
                                <Link
                                    href="/signIn"
                                    className={classes.logoLink}
                                    style={{ textDecoration: "none" }}
                                >
                                    Sign In
                                </Link>
                            </Typography>
                        </IconButton>
                        <IconButton aria-label="cart" color="inherit">
                            <Badge badgeContent={1} color="secondary">
                                <CartList></CartList>
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <Typography className={secondHeaderClass.root}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" className={classes.logoLink}>
                            Home
                        </Link>
                        <Link href="/about" className={classes.logoLink}>
                            About
                        </Link>
                        <Link href="/contacts" className={classes.logoLink}>
                            Contacts
                        </Link>
                    </Breadcrumbs>
                    <Divider
                        orientation="vertical"
                        flexItem
                        variant="middle"
                    ></Divider>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/consumerfood" className={classes.logoLink}>
                            Consumer_Food
                        </Link>
                        <Link href="/toiletries" className={classes.logoLink}>
                            Toiletries
                        </Link>
                        <Link
                            href="/healthandcare"
                            className={classes.logoLink}
                        >
                            {"Health_&_care"}
                        </Link>
                    </Breadcrumbs>
                </Typography>
                <Typography
                    className={secondHeaderClass.root}
                    style={{ backgroundColor: "#131921" }}
                >
                    <LocationAlart></LocationAlart>
                </Typography>
            </AppBar>
            <div style={{ marginBottom: 150 }}></div>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}

import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../logo2.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
    header__logo: {
        width: 100,
        height: "inherit",
        marginLeft: 70,
    },
    menuColor: {
        color: "white",
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        left: false,
    });

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    const [selectedCategory, setCategory] = React.useState("");

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
    };
    const handleClick4 = () => {
        setOpen4(!open4);
    };

    useEffect(() => {
        dispatch({
            type: "UPDATE_PRODUCT",
        });
        
        if (sessionStorage.getItem("allProduct")) {
            let selectedSubCategoryProducts = JSON.parse(
                sessionStorage.getItem("allProduct")
            ).filter((p) => p.sub_category == selectedCategory);

            dispatch({
                type: "SELECTED_SUB_CAT_PRODUCT",
                product: selectedSubCategoryProducts,
            });
        }
    }, [selectedCategory]);

    const handleCategorySelect = () => {
        history.push("/productList");
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
        >
            <img className={classes.header__logo} src={logo} alt="logo" />
            <Divider></Divider>
            <List>
                <ListItem button key="Consumer food" onClick={handleClick}>
                    <ListItemText
                        primary={<strong>{"Consumer food"}</strong>}
                    />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("flour");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Flour" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("rice");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Rice" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("oil");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Oil" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("milk");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Milk" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("spicePickle");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary={"Spices & Pickles"} />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("salt");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Salt" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("sugar");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Sugar" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("onionGarlicPotato");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Onion-Garlic-Potato" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("tea");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Tea" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("chocolate");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Chocolate" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("snacks");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Snacks" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("cookingBaking");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary={"Cooking & Baking"} />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button key="Toletries" onClick={handleClick2}>
                    <ListItemText primary={<strong>{"Toletries"}</strong>} />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("washroomToletries");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Washroom Toiletries" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("homeKitchenToiletries");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary={"Home & Kitchen"} />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("airFreshener");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Air Freshener" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button key={"Health & Care"} onClick={handleClick3}>
                    <ListItemText
                        primary={<strong>{"Health & Care"}</strong>}
                    />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("toothbrush");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Toothbrush" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("toothpaste");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Toothpaste" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("soap");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Soap" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("shampoo");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Shampoo" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("skinCare");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Skin-care" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("faceMask");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Face Mask" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button key={"Medicine"} onClick={handleClick4}>
                    <ListItemText primary={<strong>{"Medicine"}</strong>} />
                    {open4 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open4} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            onClick={() => {
                                setCategory("Napa");
                            }}
                        >
                            <ListItemText primary="Napa" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    );

    return (
        <div>
            {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        className={classes.menuColor}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

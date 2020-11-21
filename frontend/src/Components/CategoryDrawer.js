import React from "react";
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
import flour1 from "../image/consumer/flour _ suji/teer_flour_maida.png";

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

    const handleCategorySelect = () => {
        // selectedCategory
        // etar moddhe Sub-category nam ta ase...
        // ekhane oi sub-category ar shob product ashbe...
        //
        //
        //
        // productList.js a redirect korbe r shob product info pathabe...
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
                                console.log("flour");
                                setCategory("flour");
                                handleCategorySelect();
                            }}
                        >
                            <ListItemText primary="Flour" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("rice");
                                setCategory("rice");
                            }}
                        >
                            <ListItemText primary="Rice" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("milk");
                                setCategory("milk");
                            }}
                        >
                            <ListItemText primary="Milk" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("spiceAndSauce");
                                setCategory("spiceAndSauce");
                            }}
                        >
                            <ListItemText primary={"Spices & sauce"} />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("salt");
                                setCategory("salt");
                            }}
                        >
                            <ListItemText primary="Salt" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("sugar");
                                setCategory("sugar");
                            }}
                        >
                            <ListItemText primary="Sugar" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("onionGarlicPotato");
                                setCategory("onionGarlicPotato");
                            }}
                        >
                            <ListItemText primary="onion-garlic-potato" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("tea");
                                setCategory("tea");
                            }}
                        >
                            <ListItemText primary="Tea" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("chocolate");
                                setCategory("chocolate");
                            }}
                        >
                            <ListItemText primary="Chocolate" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("snacks");
                                setCategory("snacks");
                            }}
                        >
                            <ListItemText primary="Snacks" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("cookingAndBacking");
                                setCategory("cookingAndBacking");
                            }}
                        >
                            <ListItemText primary={"cooking & baking"} />
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
                                console.log("washroomToilatries");
                                setCategory("salt");
                            }}
                        >
                            <ListItemText primary="washroom toiletries" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("homeAndKitchenToiletries");
                                setCategory("homeAndKitchenToiletries");
                            }}
                        >
                            <ListItemText
                                primary={"home & kitchen toiletries"}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("airFreshener");
                                setCategory("airFreshener");
                            }}
                        >
                            <ListItemText primary="Air freshener" />
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
                                console.log("toothBrush");
                                setCategory("toothBrush");
                            }}
                        >
                            <ListItemText primary="Toothbrush" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("toothPaste");
                                setCategory("toothPaste");
                            }}
                        >
                            <ListItemText primary="Toothpaste" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("soap");
                                setCategory("soap");
                            }}
                        >
                            <ListItemText primary="Soap" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("shampoo");
                                setCategory("shampoo");
                            }}
                        >
                            <ListItemText primary="Shampoo" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("skinCare");
                                setCategory("skinCare");
                            }}
                        >
                            <ListItemText primary="Skin-care" />
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => {
                                console.log("faceMask");
                                setCategory("faceMask");
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
                                console.log("Napa");
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

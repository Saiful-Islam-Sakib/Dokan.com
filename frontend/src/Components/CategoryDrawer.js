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
import { Link } from "@material-ui/core";

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

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
        setOpen3(!open3);
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
                    <ListItemText primary="Consumer food" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="Flour" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Rice" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Milk" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Spices & sauce " />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Salt" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Sugar" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="onion-garlic-potato" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Tea" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Chocolate" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Snacks" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="cooking & baking" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button key="Toletries" onClick={handleClick2}>
                    <ListItemText primary="Toletries" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="washroom toletries" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="home & kitchen toletries" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Air freshener" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button key="Health & Care" onClick={handleClick3}>
                    <ListItemText primary="Health & Care" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemText primary="Toothbrush" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Toothpaste" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Soap" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Shampoo" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Skin-care" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Face Mask" />
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

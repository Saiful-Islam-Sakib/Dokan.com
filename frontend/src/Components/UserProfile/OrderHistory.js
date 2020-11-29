import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import {
    Avatar,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        async function fetchOrderHistory() {
            try {
                const res = await fetch(
                    "http://localhost:5000/dokan.com/order/customer" +
                        JSON.parse(localStorage.getItem("user"))._id
                );
                const response = await res.json();
            } catch (err) {
                console.log(err);
            }
        }
        fetchOrderHistory();
    }, []);

    return (
        <div className={classes.root}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        {"Order date: 29/01/1996"}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List className={classes.root}>
                        <ListItem
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                background: "#ECEFF1",
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    variant="rounded"
                                    alt="productImage"
                                    src="#image"
                                ></Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={"Product Name"} />
                            <ListItemText secondary={"product quantity"} />
                            <ListItemText secondary={"Product Price"} />
                            <Button>
                                <DeleteIcon></DeleteIcon>
                            </Button>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

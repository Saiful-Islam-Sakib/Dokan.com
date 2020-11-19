import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
    Avatar,
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
                        Order Id: #654321789
                        {/* order id */}
                    </Typography>
                    <div style={{ display: "flex", flexGrow: 1 }}></div>
                    <Typography className={classes.secondaryHeading}>
                        29/01/1996
                        {/* order date  */}
                    </Typography>
                    <div style={{ display: "flex", flexGrow: 1 }}></div>
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
                            <ListItemText primary="Rice 1 asdasd asas dasdas dasd asd dasd" />
                            <ListItemText secondary="1" />
                            <ListItemText secondary="$100" />
                        </ListItem>
                        {/* increase list item to have multiple products in a single order */}
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>
                        Order Id: #654321789
                        {/* order id */}
                    </Typography>
                    <div style={{ display: "flex", flexGrow: 1 }}></div>
                    <Typography className={classes.secondaryHeading}>
                        29/01/1996
                        {/* order date  */}
                    </Typography>
                    <div style={{ display: "flex", flexGrow: 1 }}></div>
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
                            <ListItemText primary="Rice 1 asdasd asas dasdas dasd asd dasd" />
                            <ListItemText secondary="1" />
                            <ListItemText secondary="$100" />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            {/* increase acordion to increase number of orders */}
        </div>
    );
}

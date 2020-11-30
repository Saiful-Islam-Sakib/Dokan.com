import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    makeStyles,
} from "@material-ui/core";
import React, { useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
    AccordionActions,
    Avatar,
    Button,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function SingleProductOrderHistory(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [expanded, setExpanded] = React.useState(false);
    const [cancelOrder, setCancelOrder] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleCancelOrder = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(
                "http://localhost:5000/dokan.com/order/customer/deleteorder/" +
                    props.product._id,
                {
                    method: "DELETE",
                }
            );
            const response = await res.json();

            if (res.status === 201) {
                console.log("response");
                dispatch({
                    type: "FETCH_ORDER_HISTORY",
                });

                window.location.reload(false);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Accordion
                expanded={expanded === props.product.id}
                onChange={handleChange(props.product.id)}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography>
                        {"Date : " + new Date(props.product.date).toGMTString()}
                    </Typography>

                    <FiberManualRecordIcon
                        style={
                            props.product.order_confirmation
                                ? props.product.order_delivered
                                    ? { color: "#4CAF50" }
                                    : { color: "#2196F3" }
                                : { color: "red" }
                        }
                    ></FiberManualRecordIcon>
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
                            <ListItemText primary={props.product.p_name} />
                            <ListItemText secondary={props.product.quantity} />
                            <ListItemText
                                secondary={
                                    props.product.total_amount /
                                    props.product.quantity
                                }
                            />
                            <ListItemText secondary={"Cash on delivery"} />
                            <ListItemText
                                secondary={props.product.delivery_address}
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        disabled={props.product.order_confirmation}
                        onClick={handleCancelOrder}
                    >
                        <DeleteIcon></DeleteIcon>
                        Cancel Order
                    </Button>
                </AccordionActions>
            </Accordion>
            <div style={{ marginBottom: "1vh" }}></div>
        </div>
    );
}

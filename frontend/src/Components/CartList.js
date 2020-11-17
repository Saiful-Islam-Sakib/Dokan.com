import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.default,
    },
    quantityNumber: {
        maxWidth: 50,
        maxHeight: 30,
        marginRight: "8px",
    },
}));

export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                <ShoppingBasketIcon></ShoppingBasketIcon>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Total Product"
                                secondary="1"
                            />
                            <ListItemText
                                primary="Total Amount"
                                secondary="$100"
                            />
                        </ListItem>
                    </List>
                </DialogTitle>
                <Divider></Divider>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <List className={classes.root}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Rice 1 kg"
                                    secondary="$100"
                                />
                                <TextField
                                    id="filled-disabled"
                                    type="number"
                                    defaultValue="1"
                                    inputProps={{
                                        min: "0",
                                        style: { textAlign: "center" },
                                    }}
                                    className={classes.quantityNumber}
                                />
                                <Button>X</Button>
                            </ListItem>
                        </List>
                    </DialogContentText>
                </DialogContent>
                <Divider></Divider>
                <DialogActions>
                    <Button color="primary">Checkout</Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

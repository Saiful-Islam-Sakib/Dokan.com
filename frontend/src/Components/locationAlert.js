import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const locations = [
    {
        city: "Dhaka",
        zone: [
            { area: "Uttara", place: ["Sector 1", "Sector 2", "Sector 3"] },
            { area: "Mirpur", place: ["Mirpur 1", "Mirpur 2", "Mirpur 3"] },
            { area: "Bashundhara", place: ["Block A", "Block B", "Block C"] },
        ],
    },
    { city: "Chittagong", area: {}, place: {} },
    { city: "Rajshahi", area: {}, place: {} },
    { city: "Sylhet", area: {}, place: {} },
    { city: "Khulna", area: {}, place: {} },
    { city: "Barishal", area: {}, place: {} },
    { city: "Mymensingh", area: {}, place: {} },
    { city: "Rangpur", area: {}, place: {} },
];

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);
    const [areaName, setArea] = React.useState([]);
    const [placeName, setPlace] = React.useState([""]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open dialog
            </Button>
            <Dialog
                onClose={handleClose}
                disableBackdropClick
                disableEscapeKeyDown
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Select Your Location
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        This will help you to find your nearby shops.
                    </Typography>
                    <form style={{ display: "flex" }}>
                        <Autocomplete
                            id="locationCity"
                            options={locations}
                            getOptionLabel={(option) => option.city}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="City"
                                    variant="outlined"
                                />
                            )}
                            onChange={(event, option) => {
                                setArea(option.zone);
                            }}
                        />
                        <Autocomplete
                            id="locationArea"
                            options={areaName}
                            getOptionLabel={(option) => option.area}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Area"
                                    variant="outlined"
                                />
                            )}
                            onChange={(event, option) => {
                                setPlace(option.place);
                            }}
                        />
                        <Autocomplete
                            id="locationPlace"
                            options={placeName}
                            getOptionLabel={(option) => option.place}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Place"
                                    variant="outlined"
                                />
                            )}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

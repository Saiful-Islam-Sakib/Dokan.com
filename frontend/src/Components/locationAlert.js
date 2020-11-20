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
import Alert from "@material-ui/lab/Alert";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

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
    const [open, setOpen] = React.useState(
        sessionStorage.city !== undefined &&
            sessionStorage.area !== undefined &&
            sessionStorage.place !== undefined
            ? false
            : true
    );
    const [areaName, setArea] = React.useState([]);
    const [placeName, setPlace] = React.useState([]);

    const [city, setmycity] = React.useState("");
    const [area, setmyarea] = React.useState("");
    const [place, setmyplace] = React.useState("");

    const [errorState, seterror] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        if (city.length > 0 && area.length > 0 && place.length > 0) {
            setOpen(false);
            seterror(false);
        } else {
            seterror(true);
        }
    };

    return (
        <div>
            <Button
                color="secondary"
                startIcon={<LocationOnOutlinedIcon />}
                onClick={handleClickOpen}
            >
                <Typography>
                    {`${sessionStorage.getItem(
                        "city"
                    )} / ${sessionStorage.getItem(
                        "area"
                    )} / ${sessionStorage.getItem("place")}`}
                </Typography>
            </Button>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title">
                    Please select Your Location
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        This will help you to find your nearby shops.
                    </Typography>
                    <form style={{ display: "flex" }}>
                        <Autocomplete
                            id="locationCity"
                            disableClearable
                            options={locations}
                            getOptionLabel={(option) => {
                                return option.city;
                            }}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="City"
                                    variant="outlined"
                                />
                            )}
                            onChange={(event, option) => {
                                setmycity(option.city);
                                sessionStorage.setItem("city", option.city);
                                setArea(option.zone);
                            }}
                        />
                        <Autocomplete
                            id="locationArea"
                            disableClearable
                            options={areaName}
                            getOptionLabel={(option) => {
                                return option.area;
                            }}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Area"
                                    variant="outlined"
                                />
                            )}
                            onChange={(event, option) => {
                                setmyarea(option.area);
                                sessionStorage.setItem("area", option.area);
                                setPlace(option.place);
                            }}
                        />
                        <Autocomplete
                            id="locationPlace"
                            disableClearable
                            options={placeName}
                            getOptionLabel={(option) => {
                                return option;
                            }}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Place"
                                    variant="outlined"
                                />
                            )}
                            onChange={(event, option) => {
                                setmyplace(option);
                                sessionStorage.setItem("place", option);
                            }}
                        />
                    </form>
                </DialogContent>
                {errorState ? (
                    <Typography>
                        <Alert severity="warning">
                            All fields are required
                        </Alert>
                    </Typography>
                ) : null}
                <DialogActions>
                    <Button
                        autoFocus
                        type="submit"
                        onClick={handleClose}
                        color="primary"
                    >
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

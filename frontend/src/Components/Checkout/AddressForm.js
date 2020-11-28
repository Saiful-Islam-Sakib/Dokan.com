import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm() {
    const [defaultAddress, setDefaultAddress] = React.useState(false);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        disabled={defaultAddress ? true : false}
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="shipping-address"
                        onChange={(event) => {
                            localStorage.setItem(
                                "deliveryAddress",
                                event.target.value
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveAddress"
                                value="yes"
                                onClick={() => {
                                    if (defaultAddress) {
                                        setDefaultAddress(false);
                                    } else {
                                        localStorage.setItem(
                                            "deliveryAddress",
                                            JSON.parse(
                                                localStorage.getItem("user")
                                            ).address
                                        );
                                        setDefaultAddress(true);
                                    }
                                }}
                            />
                        }
                        label="Use default address"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

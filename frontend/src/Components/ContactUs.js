import {
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography,
} from "@material-ui/core";
import React from "react";
import AddressIcon from "@material-ui/icons/LocationOn";
import PhoneNumberIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

export default function ContactUs() {
    const [contactUsEmail, setmail] = React.useState("");
    const [contactUsMessage, setmessage] = React.useState("");
    const [error, setError] = React.useState("");

    const handleContactUs = async (event) => {
        event.preventDefault();
        let email = contactUsEmail;
        let message = contactUsMessage;
        // send contactUs message ...........................................

        setmail("");
        setmessage("");
        setError("");
    };
    return (
        <div>
            <Container maxWidth="sm">
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    gutterBottom
                >
                    Contact Us
                </Typography>

                <Divider style={{ marginBottom: "1vh" }}></Divider>

                <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6">
                        <EmailIcon></EmailIcon>
                        <strong> Email: </strong>
                        {"dokan@mail.com"}
                    </Typography>
                    <Typography variant="h6">
                        <PhoneNumberIcon></PhoneNumberIcon>
                        <strong> Po.Number: </strong>
                        {"01x-xxxx-xxxx"}
                    </Typography>
                    <Typography variant="h6">
                        <AddressIcon></AddressIcon>
                        <strong> Address: </strong>
                        {"654 ABCD, House: 24, Road: 33, Block: A"}
                    </Typography>
                </Box>

                <div style={{ marginBottom: "10vh" }}></div>

                <Typography variant="h6">
                    Feel Free To Ask Anything :
                </Typography>

                <Divider style={{ marginBottom: "1vh" }}></Divider>

                <form>
                    <TextField
                        id="email"
                        label="email"
                        variant="outlined"
                        placeholder="email"
                        type="email"
                        required
                        fullWidth
                        style={{ marginBottom: 8 }}
                        onChange={(event) => {
                            setmail(event.target.value);
                        }}
                    />
                    <TextField
                        id="message"
                        placeholder="message"
                        required
                        fullWidth
                        multiline
                        rows={5}
                        variant="outlined"
                        style={{ marginBottom: 8 }}
                        onChange={(event) => {
                            setmessage(event.target.value);
                        }}
                    />
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                        <Button
                            type="email"
                            autoComplete="Email"
                            variant="contained"
                            color="secondary"
                            onClick={handleContactUs}
                        >
                            Send
                        </Button>
                    </div>
                </form>
                {error.length > 0 ? (
                    <Typography style={{ color: "red" }}>
                        Unable To Report
                    </Typography>
                ) : (
                    <Typography style={{ color: "green" }}>
                        Reported Successfully
                    </Typography>
                )}
            </Container>
        </div>
    );
}

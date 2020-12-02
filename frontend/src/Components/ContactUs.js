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
    const [errStatus, setStatus] = React.useState(false);
    const [correctStatus, setCorrectStatus] = React.useState(false);

    const handleContactUs = async (event) => {
        event.preventDefault();
        let email = contactUsEmail;
        let message = contactUsMessage;
        try {
            let res = await fetch("http://localhost:5000/dokan.com/report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    body: message,
                }),
            });
            let response = await res.json();
            if (res.status == 201) {
                setStatus(false);
                setCorrectStatus(true);
            } else {
                setStatus(true);
                setCorrectStatus(false);
                setError(response.data);
            }
        } catch (err) {
            console.log(err);
        }
        setmail("");
        setmessage("");
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
                {errStatus ? (
                    <Typography style={{ color: "red" }}>{error}</Typography>
                ) : (
                    <></>
                )}
                {correctStatus ? (
                    <Typography style={{ color: "green" }}>{error}</Typography>
                ) : (
                    <></>
                )}
            </Container>
        </div>
    );
}

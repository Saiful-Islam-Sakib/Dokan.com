import {
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";
import AddressIcon from "@material-ui/icons/LocationOn";
import PhoneNumberIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import NameIcon from "@material-ui/icons/Person";
import TabUserProfile from "./TabUserProfile";

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        display: "flex",
        flexWrap: "wrap",
    },
    cardMedia: {
        maxHeight: 400,
        maxWidth: 300,
        objectFit: "fill",
    },
    cardContainer: {
        marginLeft: "5%",
    },
}));

export default function UserProfile() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg">
                <Card className={classes.cardRoot}>
                    <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={
                            "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
                        }
                    />
                    <CardContent className={classes.cardContainer}>
                        <Typography variant="h5">
                            <NameIcon></NameIcon>
                            <strong> Name: </strong> name{"name"}
                        </Typography>
                        <Divider></Divider>
                        <Typography variant="h5">
                            <EmailIcon></EmailIcon>
                            <strong> Email: </strong>
                            {"email@email.com"}
                        </Typography>
                        <Divider></Divider>
                        <Typography variant="h5">
                            <PhoneNumberIcon></PhoneNumberIcon>
                            <strong> Phone Number: </strong>
                            {"01011011010"}
                        </Typography>
                        <Divider></Divider>
                        <Typography variant="h5">
                            <AddressIcon></AddressIcon>
                            <strong> Primary Address: </strong>
                            {"111a asdasdasd asdas dasdas dasd"}
                        </Typography>
                        <Divider></Divider>
                    </CardContent>
                </Card>
                <div style={{ marginBottom: "1%" }}></div>
                <TabUserProfile></TabUserProfile>
            </Container>
        </div>
    );
}

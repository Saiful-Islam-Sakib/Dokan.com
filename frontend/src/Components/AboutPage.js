import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        height: "20vh",
        objectFit: "fill",
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const developers = [
    {
        ID: "160104014",
        name: "Syeda Shariqa Trina",
        image: "https://image.freepik.com/free-photo/woman-is-looking-evening-lake_8353-11295.jpg",
        work: "Data Collection & Report Writing",
    },
    {
        ID: "160104017",
        name: "Saiful Islam Sakib",
        image: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        work: "Frontend",
    },
    {
        ID: "160104055",
        name: "MD Junaeid Bhuiyan",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        work: "Backend",
    },
];

export default function Album() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom
                    >
                        About Us
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        This web site will give you the ability to buy products
                        from your nearby shops from home. We have used React for
                        frontend, node and express for backend and mongodb(no
                        sql) as our database in short MERN Stack Technologies.
                        That's why this site renders more faster than many other
                        web sites.
                    </Typography>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Typography gutterBottom variant="h5" component="h2">
                    Developers:
                </Typography>
                <Grid container spacing={4}>
                    {developers.map((developer) => (
                        <Grid item key={developer.ID} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    className={classes.cardMedia}
                                    image={developer.image}
                                    title={developer.name}
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {developer.name}
                                    </Typography>
                                    <Typography>
                                        {"ID : " + developer.ID}
                                    </Typography>
                                    <Typography>{developer.work}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}

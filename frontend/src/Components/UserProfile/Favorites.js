import {
    Avatar,
    Button,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function Favorites() {
    const classes = useStyles();
    return (
        <div>
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
                    <ListItemText
                        primary={
                            <Link href="#singleProductPage">
                                {"Rice 1 asdasd asas dasdas dasd asd dasd"}
                            </Link>
                        }
                        secondary="$100"
                    />
                    <ListItemText primary="product details here" />
                    <Button>
                        <DeleteIcon></DeleteIcon>
                    </Button>
                </ListItem>
            </List>
        </div>
    );
}

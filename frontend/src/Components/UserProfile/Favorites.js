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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

export default function Favorites() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const fullStore = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch({
            type: "FETCH_FAVORITES",
        });
    }, []);

    return (
        <div>
            <List className={classes.root}>
                {fullStore.favorites?.map((product, index) => (
                    <ListItem
                        key={index}
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
                                src={product.img?.slice(2, product.img.length)}
                            ></Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Link href="#singleProductPage">
                                    {product.name}
                                </Link>
                            }
                            secondary={product.price}
                        />
                        <ListItemText primary={product.shop_name} />
                        {/* <Button>
                            <DeleteIcon></DeleteIcon>
                        </Button> */}
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

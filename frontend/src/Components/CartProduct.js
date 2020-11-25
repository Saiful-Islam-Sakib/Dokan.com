import {
    Avatar,
    Button,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";

export default function CartProduct(props) {
    const dispatch = useDispatch();

    const handleCartProductDelete = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: props.product.id,
        });
    };

    return (
        <ListItem style={{ display: "flex", flexFlow: "row wrap" }}>
            <ListItemAvatar>
                <Avatar
                    variant="rounded"
                    alt="productImage"
                    src={props.product.img}
                ></Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={props.product.name}
                secondary={props.product.price + " tk"}
                style={{ marginRight: "1rem" }}
            />
            <ListItemText
                primary={props.product.s_id}
                style={{ marginRight: "1rem" }}
            />
            <TextField
                id="quantity field"
                type="number"
                defaultValue={props.quantity}
                inputProps={{
                    min: "1",
                    style: { textAlign: "center" },
                }}
                style={{
                    minWidth: 20,
                    maxWidth: 50,
                    maxHeight: 30,
                }}
            />
            <Button onClick={handleCartProductDelete}>
                <DeleteIcon></DeleteIcon>
            </Button>
        </ListItem>
    );
}

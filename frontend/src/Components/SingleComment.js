import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Typography,
} from "@material-ui/core";
import React from "react";

export default function SingleComment(props) {
    return (
        <Box style={{ display: "flex", marginBottom: 16 }}>
            <Card style={{ marginRight: 16 }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        image={"/image/avater/1.png"}
                        title="Contemplative Reptile"
                        style={{
                            maxHeight: 100,
                            maxWidth: 100,
                            objectFit: "fill",
                        }}
                    />
                </CardContent>
            </Card>
            <Card style={{ flexGrow: 1 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {props.comment.name}
                        {/* {" ( " + new Date(props.comment.date) + " ) "} */}
                    </Typography>
                    <Divider style={{ marginBottom: 10 }}></Divider>
                    <Typography variant="body2" component="p">
                        {props.comment.body}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

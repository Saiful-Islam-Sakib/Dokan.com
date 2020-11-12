import React from "react";
import OfferSlider from "./OfferSlider";
import Container from "@material-ui/core/Container";

export default function HomePageBody() {
    return (
        <Container maxWidth="md">
            <OfferSlider></OfferSlider>
        </Container>
    );
}

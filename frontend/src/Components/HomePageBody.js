import React from "react";
import OfferSlider from "./OfferSlider";
import ConsumerFood from "./Consumer_food";
import HealthCare from "./Health&Care";
import Toiletries from "./Toiletries";
import Container from "@material-ui/core/Container";

export default function HomePageBody() {
    return (
        <div>
            <Container maxWidth="lg">
                <OfferSlider></OfferSlider>
                <ConsumerFood></ConsumerFood>
                <HealthCare></HealthCare>
                <Toiletries></Toiletries>
            </Container>
        </div>
    );
}

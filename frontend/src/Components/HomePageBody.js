import React from "react";
import OfferSlider from "./OfferSlider";
import TopProducts from "./TopProducts";
import TopDeals from "./TopDeals";
import Container from "@material-ui/core/Container";

export default function HomePageBody() {
    return (
        <div>
            <Container maxWidth="md">
                <OfferSlider></OfferSlider>
                <TopProducts></TopProducts>
                <TopDeals></TopDeals>
            </Container>
        </div>
    );
}

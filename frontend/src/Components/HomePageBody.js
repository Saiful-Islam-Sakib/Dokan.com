import React from "react";
import OfferSlider from "./OfferSlider";
import TopProducts from "./TopProducts";
import TopDeals from "./TopDeals";
import Container from "@material-ui/core/Container";
import LocationAlart from "./locationAlert";
import SingleProduct from "./SingleProduct";

export default function HomePageBody() {
    return (
        <div>
            <Container maxWidth="lg">
                <OfferSlider></OfferSlider>
                <TopProducts></TopProducts>
                <TopDeals></TopDeals>
                <LocationAlart></LocationAlart>
                <SingleProduct></SingleProduct>
            </Container>
        </div>
    );
}

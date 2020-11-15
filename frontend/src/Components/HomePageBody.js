import React from "react";
import OfferSlider from "./OfferSlider";
import TopProducts from "./TopProducts";
import TopDeals from "./TopDeals";
import Container from "@material-ui/core/Container";
import SingleProduct from "./SingleProduct";

export default function HomePageBody() {
    return (
        <div>
            <Container maxWidth="md">
                <OfferSlider></OfferSlider>
                <TopProducts></TopProducts>
                <TopDeals></TopDeals>
                <SingleProduct></SingleProduct>
            </Container>
        </div>
    );
}

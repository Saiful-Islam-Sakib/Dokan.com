import React from "react";
import OfferSlider from "./OfferSlider";
import ConsumerFood from "./Consumer_food";
import HealthCare from "./Health&Care";
import Toiletries from "./Toiletries";
import Container from "@material-ui/core/Container";
import LocationAlart from "./locationAlert";
import SingleProduct from "./SingleProduct";
import SellerSignUp from "./SellerSignUp";

export default function HomePageBody() {
    return (
        <div>
            <Container maxWidth="lg">
                <OfferSlider></OfferSlider>
                <ConsumerFood></ConsumerFood>
                <HealthCare></HealthCare>
                <Toiletries></Toiletries>
                <LocationAlart></LocationAlart>
                {/* <SingleProduct></SingleProduct> */}
                <SellerSignUp></SellerSignUp>
            </Container>
        </div>
    );
}

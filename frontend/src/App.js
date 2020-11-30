import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Body from "./Components/HomePageBody";
import SellerSignIn from "./Components/SellerSignIn";
import SellerSignUp from "./Components/SellerSignUp";
import About from "./Components/AboutPage";
import CheckOut from "./Components/Checkout/Checkout";
import UserProfile from "./Components/UserProfile/UserProfile";
import ProductList from "./Components/ProductList";
import SignleProduct from "./Components/SingleProduct";

import Seller from "./Components/Seller";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";

function App() {
    return (
        <Router>
            <div
                className="App"
                style={
                    {
                        //backgroundImage: `linear-gradient(to left, gray, white, gray)`,
                        //backgroundImage: `linear-gradient(white 50%, #131921)`,
                        //backgroundImage: `linear-gradient(white 50%, pink, red)`,
                    }
                }
            >
                {localStorage.getItem("seller") ? <div></div> : <Header />}
                <Switch>
                    <Route exact path="/">
                        <Body></Body>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/signIn">
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <Body></Body>
                        ) : (
                            <SignIn />
                        )}
                    </Route>
                    <Route exact path="/signUp">
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <Body></Body>
                        ) : (
                            <SignUp />
                        )}
                    </Route>
                    <Route exact path="/sellerSignIn">
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <Body></Body>
                        ) : (
                            <SellerSignIn></SellerSignIn>
                        )}
                    </Route>
                    <Route exact path="/sellerSignUp">
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <Body></Body>
                        ) : (
                            <SellerSignUp></SellerSignUp>
                        )}
                    </Route>
                    <Route exact path="/checkout">
                        <CheckOut></CheckOut>
                    </Route>
                    <Route exact path="/UserProfile">
                        {/* {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <UserProfile></UserProfile>
                        ) : (
                            <Body></Body>
                        )} */}
                        <UserProfile></UserProfile>
                    </Route>
                    <Route exact path="/productList">
                        <ProductList></ProductList>
                    </Route>
                    <Route exact path="/singleProduct">
                        <SignleProduct></SignleProduct>
                    </Route>
                    <Route exact path="/contactUs">
                        <ContactUs></ContactUs>
                    </Route>
                    <Router exact path="/seller-panel">
                        {localStorage.getItem("seller") ||
                        sessionStorage.getItem("seller") ? (
                            <Seller></Seller>
                        ) : (
                            <Body></Body>
                        )}
                    </Router>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

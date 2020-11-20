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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div
                className="App"
                style={{
                    //backgroundImage: `linear-gradient(to left, gray, white, gray)`,
                    //backgroundImage: `linear-gradient(white 50%, #131921)`,
                    //backgroundImage: `linear-gradient(white 50%, pink, red)`,
                }}
            >
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Body></Body>
                    </Route>
                    <Route exact path="/about">
                        <About></About>
                    </Route>
                    <Route exact path="/signIn">
                        <SignIn></SignIn>
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                    <Route exact path="/sellerSignIn">
                        <SellerSignIn></SellerSignIn>
                    </Route>
                    <Route exact path="/sellerSignUp">
                        <SellerSignUp></SellerSignUp>
                    </Route>
                    <Route exact path="/checkout">
                        <CheckOut></CheckOut>
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

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
import MyProfile from "./Components/UserProfile/UserProfile";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import UserProfile from "./Components/UserProfile/UserProfile";

function App() {
    const history = useHistory();
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
                <Header />
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
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <CheckOut></CheckOut>
                        ) : (
                            <Body></Body>
                        )}
                    </Route>
                    <Route exact path="/UserProfile">
                        {localStorage.getItem("login") === "true" ||
                        sessionStorage.getItem("login") === "true" ? (
                            <UserProfile></UserProfile>
                        ) : (
                            <Body></Body>
                        )}
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

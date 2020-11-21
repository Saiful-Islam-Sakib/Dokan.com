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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(state, action) {
    return state;
}

const INITIAL_STATE = {
    init: 0,
};

const store = createStore(reducer, INITIAL_STATE);

function App() {
    return (
        <Provider store={store}>
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
                        <Route exact path="/productList">
                            <ProductList
                                products={sessionStorage.getItem("products")}
                            ></ProductList>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import Body from "./Components/HomePageBody";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Body></Body>
                    </Route>
                    <Route exact path="/signIn">
                        <SignIn></SignIn>
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

import "./App.css";
import Header from "./Components/Header2";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StickyFooter from "./Components/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/signIn">
                        <SignIn></SignIn>
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                </Switch>
                {/* body */}
                <h1> body</h1>
                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;

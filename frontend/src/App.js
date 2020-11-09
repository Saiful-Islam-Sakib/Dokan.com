import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/signIn">
                        <SignIn></SignIn>
                    </Route>
                    <Route path="/signUp">
                        <SignUp></SignUp>
                    </Route>
                </Switch>
                {/* body */}
                <h1> hello </h1>
                {/* footer */}
            </div>
        </Router>
    );
}

export default App;

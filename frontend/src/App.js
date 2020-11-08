import "./App.css";
import Header from "./Components/Header";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
    return (
        <div className="App">
            <Header />
            <SignIn></SignIn>
            <SignUp></SignUp>
            {/* body */}
            <h1> hello </h1>
            {/* footer */}
        </div>
    );
}

export default App;

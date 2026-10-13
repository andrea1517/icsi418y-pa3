import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="app">
      <div className="app-header">
        <h1> Welcome! </h1>
        <p>Create an Account or Log in</p>
      </div>

      <div className="form">
        {showSignUp === true ? (
          <Login/>
        ) : (
          <Signup/>
        )}

        <br/>

        {showSignUp ? (
          <p className="switch-forms">
            Don't have an account?{""}
            <button type="button" onClick={() => setShowSignUp(false)}>Sign up</button>
          </p>
        ) : (
          <p className="switch-forms">
            Already have an account?{""}
            <button type="button" onClick={() => setShowSignUp(true)}>Log in</button>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
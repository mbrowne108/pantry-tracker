import { useState } from "react";
import LoginForm from "./LoginForm.js";
import SignUpForm from "./SignUpForm.js";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1 className='jumbotron display-2 text-center'>Recipes/Pantry/Shopping List App</h1>
      <div className="container card text-center col-sm-4">
        {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <p>
                    Don't have an account? &nbsp;
                    <button className="btn btn-secondary" onClick={() => setShowLogin(false)}>
                    Sign Up
                    </button>
                </p>
            </>
        ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <p>
                Already have an account? &nbsp;
                <button className="btn btn-secondary" onClick={() => setShowLogin(true)}>
                Log In
                </button>
            </p>
            </>
        )}
      </div>
    </div>
  );
}

export default Login;

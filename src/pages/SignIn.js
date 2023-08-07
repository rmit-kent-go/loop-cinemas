import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { verifyUser } from "../data/repository";
import '../pages/pagesCSS/SignIn.css';

/* FIX THIS: Provide visual cue upon successful login. The visual cue could be a text or a pop-up message.*/


function SignIn(props) {
  const [fields, setFields] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // Generic change handler.
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy fields.
    const temp = { username: fields.username, password: fields.password };
    // OR use spread operator.
    // const temp = { ...fields };

    // Update field and state.
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if username, username, and password are empty
    if (fields.username === "" || fields.password === "") {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    const verified = verifyUser(fields.username, fields.password);

    console.log(fields.username);
    console.log(fields.password);
    console.log(verified);

    // If verified login the user.
    if(verified === true) {
      props.loginUser(fields.username);

      // Navigate to the home page.
      navigate("/");
      return;
    }

    // Reset password field to blank.
    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    // Set error message.
    setErrorMessage("Email and / or password invalid, please try again.");
  }

  return (
    <section className="signin-section">
      <div className="signin-container">
        <h1>Sign In</h1>
        <div className="signin-row">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <label htmlFor="username">Email</label>
                <input name="username" id="username" 
                  value={fields.username} onChange={handleInputChange} />
              </div>
              <div className="form-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" 
                  value={fields.password} onChange={handleInputChange} />
              </div>
              <div className="form-container">
                  <input type="submit" className="btn submit-btn" value="SIGN IN" />
              </div>
              {errorMessage !== null &&
                <div className="form-container">
                  <span className="text-danger">{errorMessage}</span>
                </div>
              }
              <div className="form-container">
                <p className="signup-prompt">New to Loop Cinemas?</p>
                  <Link className="btn submit-btn" to="/sign-up">SIGN UP</Link>
              </div>
            </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;

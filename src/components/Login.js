import React, { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { provider } from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./login.css";
import google_logo from "../google_logo.png";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });
  }, []);

  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="google-button">
        <div className="google-button-icon">
          <img src={google_logo} width="32px" />
        </div>
        <span className="google-button-text">Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;

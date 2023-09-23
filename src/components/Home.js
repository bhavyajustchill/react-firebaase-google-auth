import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        setUserName(user.displayName);
        setEmailAddress(user.email);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Home</h1>
        <h3>Welcome, {userName}</h3>
        <h3>Email: {emailAddress}</h3>
      </div>
      <button
        onClick={() => {
          handleLogout();
        }}>
        Logout
      </button>
    </>
  );
}

import React, { useEffect, useContext } from "react";
import Logo from "../components/Logo";
import LoginButton from "../components/landing/LoginButton";
import SignUpButton from "../components/landing/SignUpButton";
import AuthContext from "../context/auth/authContext";

const Landing = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className="container">
      <Logo />
      <div className="row">
        <h3>
          Integer mi nisl, aliquet sit amet velit ac, consectetur venenatis
          massa.
        </h3>
      </div>
      <div className="row">
        <span>Join Wily Today</span>
      </div>
      <div className="row">
        <SignUpButton />
      </div>
      <div className="row">
        <LoginButton />
      </div>
    </div>
  );
};

export default Landing;

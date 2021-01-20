import React, { useEffect, useContext } from "react";
import Logo from "../components/Logo";
import LoginButton from "../components/landing/LoginButton";
import SignUpButton from "../components/landing/SignUpButton";
import AuthContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import PostFeed from "../components/landing/PostFeed";

const Landing = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  if (authContext.user === null) {
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
  } else {
    return (
      <div className="container">
        <div className="row">
          <h5>Welcome, {authContext.user.name}!</h5>
        </div>
        <div className="row">
          <PostFeed />
        </div>
        <div className="row">
          <Link to="/post">
            <button>Create Post</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Landing;

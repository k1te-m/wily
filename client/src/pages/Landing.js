import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import LoginButton from "../components/landing/LoginButton";
import SignUpButton from "../components/landing/SignUpButton";
import AuthContext from "../context/auth/authContext";
import { Link, NavLink } from "react-router-dom";
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
          <div className="col-8">
            <h5>Welcome, {authContext.user.name}!</h5>
          </div>
          <div className="col-4">
            <NavLink to="/profile">Profile</NavLink>
          </div>
        </div>
        <div className="row">
          <PostFeed />
        </div>
        <div className="row">
          <Link to="/post">
            <i className="fas fa-plus-circle" />
          </Link>
        </div>
      </div>
    );
  }
};

export default Landing;

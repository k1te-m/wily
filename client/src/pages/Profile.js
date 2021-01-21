import React, { useEffect, useContext } from "react";
import LogoutButton from "../components/landing/LogoutButton";
import Logo from "../components/Logo";
import AuthContext from "../context/auth/authContext";

const Profile = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <p>Hello World</p>
        <LogoutButton logout={authContext.logout} />
      </div>
    </div>
  );
};

export default Profile;

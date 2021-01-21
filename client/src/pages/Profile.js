import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import LogoutButton from "../components/landing/LogoutButton";
import Logo from "../components/Logo";
import AuthContext from "../context/auth/authContext";

const AvatarImg = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  margin-top: 1rem;
`;

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { avatar, name, register_date } = authContext.user;
  console.log(authContext);

  const membershipDate = new Date(register_date);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <>
      <AvatarImg src={avatar} />
      <div className="container">
        <div className="row">
          <h3>{name}</h3>
          <p>Member since: {membershipDate.toLocaleDateString()}</p>
          <LogoutButton logout={authContext.logout} />
        </div>
      </div>
    </>
  );
};

export default Profile;

import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import LogoutButton from "../components/landing/LogoutButton";
import Logo from "../components/Logo";
import AuthContext from "../context/auth/authContext";
import API from "../utils/API";

const AvatarImg = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  margin: 0.5rem;
`;

const Profile = (req) => {
  const { username } = req.match.params;
  const authContext = useContext(AuthContext);
  // const { avatar, name, register_date } = authContext.user;
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState([]);

  let posts = [];
  let userArr = [];

  // Get the specific user information for profile being viewed
  const getUser = (username) => {
    API.getUserByUsername(username).then((response) => {
      userArr = response.data;
      console.log(response);
      setUser(userArr);
    });
  };

  // Get posts made by profile that is being viewed
  const getPosts = (username) => {
    API.getPostsById(username).then((response) => {
      posts = response.data;
      console.log(response);
      setUserPosts(posts);
    });
  };

  const getPostDate = (date) => {
    const postDate = new Date(date);
    return postDate.toLocaleString("en-US");
  };

  useEffect(() => {
    authContext.loadUser();
    getPosts(username);
    getUser(username);
  }, []);

  if (user.length === 0) {
    return <div>Loading...</div>;
  } else {
    const { avatar, name, register_date } = user[0];
    const membershipDate = new Date(register_date);
    return (
      <>
        <AvatarImg src={avatar} />
        <div className="container">
          <div className="row">
            <h3>{name}</h3>
            <span>Member since: {membershipDate.toLocaleDateString()}</span>
          </div>
          <div className="row">
            {userPosts.map((post) => (
              <div className="card">
                <div className="card-body">
                  <span className="card-title">{post.author}</span>
                  <p className="card-text">{post.post}</p>
                  <span>{getPostDate(post.date)}</span>
                </div>
              </div>
            ))}
          </div>
          <LogoutButton logout={authContext.logout} />
        </div>
      </>
    );
  }
};
export default Profile;

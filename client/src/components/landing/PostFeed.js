import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import AuthContext from "../../context/auth/authContext";
import axios from "axios";

const PostFeed = (props) => {
  const authContext = useContext(AuthContext);
  const [wilyPosts, setWilyPosts] = useState([]);

  let posts = [];

  const getPosts = () => {
    API.getPosts().then((response) => {
      posts = response.data;
      setWilyPosts(posts);
    });
  };

  useEffect(() => {
    authContext.loadUser();
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="row">Post Feed</div>
      <div className="row">
        {wilyPosts.map((post) => (
          <div className="card">
            <div className="card-body">
              <span className="card-title">{post.author}</span>
              <p className="card-text">{post.post}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;

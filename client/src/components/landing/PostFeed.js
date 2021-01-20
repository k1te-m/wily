import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import AuthContext from "../../context/auth/authContext";

const PostFeed = (props) => {
  const authContext = useContext(AuthContext);
  const [wilyPosts, setWilyPosts] = useState([]);

  let posts = [];

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className="container">
      <div className="row">Post Feed</div>
    </div>
  );
};

export default PostFeed;

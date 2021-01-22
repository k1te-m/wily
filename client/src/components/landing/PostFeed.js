import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import AuthContext from "../../context/auth/authContext";
import PostContext from "../../context/posts/postContext";

const PostFeed = (props) => {
  const authContext = useContext(AuthContext);
  const [wilyPosts, setWilyPosts] = useState([]);

  const { setCurrentPost, currentPost } = authContext;

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

  const Like = async (id) => {
    let res = await setCurrentPost(id);
    let post = await currentPost;
  };

  return (
    <div className="container">
      <div className="row">Post Feed</div>
      <div className="row">
        {wilyPosts.map((post) => (
          <div className="card" key={post._id}>
            <div className="card-body">
              <span className="card-title">{post.author}</span>
              <p className="card-text">{post.post}</p>
            </div>
            <button
              onClick={() => {
                Like(post._id);
              }}
            >
              <i className="fas fa-heart" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostFeed;

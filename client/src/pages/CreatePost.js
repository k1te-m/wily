import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../components/Logo";
import { FormBtn, Input, TextArea } from "../components/Form";
import AuthContext from "../context/auth/authContext";
import API from "../utils/API";

const CreatePost = (props) => {
  const authContext = useContext(AuthContext);

  let history = useHistory();

  useEffect(() => {
    authContext.loadUser();
  }, []);

  const [postObject, setPostObject] = useState({
    post: "",
    author: authContext.user.name,
    authorID: authContext.user._id,
  });

  const { post } = postObject;

  const createPost = (data) => {
    API.savePost(data).then(() => {
      history.push("/");
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostObject({ ...postObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(postObject);
    createPost(postObject);
  };

  return (
    <div className="container">
      <div className="row">
        <h3>What's going on?</h3>
      </div>
      <div className="row">
        <TextArea
          onChange={handleInputChange}
          name="post"
          placeholder="Enter your post here!"
          value={post}
          type="text"
        />
        <FormBtn onClick={handleFormSubmit}>Post</FormBtn>
      </div>
    </div>
  );
};

export default CreatePost;

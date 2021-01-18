import React, { useState } from "react";
import Logo from "../components/Logo";
import { FormBtn, Input, TextArea } from "../components/Form";

const CreatePost = (props) => {
  const [postObject, setPostObject] = useState({
    post: "",
  });

  const { post } = postObject;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostObject({ ...postObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(postObject);
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

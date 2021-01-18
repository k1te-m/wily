import React, { useState, useContext, useEffect } from "react";
import { FormBtn, Input } from "../components/Form";
import Logo from "../components/Logo";
import AuthContext from "../context/auth/authContext";

const SignUp = (props) => {
  const authContext = useContext(AuthContext);

  const { registerUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [userObject, setUserObject] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = userObject;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("please enter all fields");
    } else if (password !== password2) {
      alert("passwords do not match");
    } else {
      registerUser({ name, email, password });
    }
    console.log(userObject);
  };

  return (
    <div className="container">
      <div className="row">
        <h3>Create account</h3>
      </div>
      <div className="row">
        <form>
          <Input
            onChange={handleInputChange}
            name="name"
            placeholder="Kelly Smith"
            value={name}
            type="text"
          />
          <Input
            onChange={handleInputChange}
            name="email"
            placeholder="ksmith@gmail.com"
            value={email}
            type="email"
          />
          <Input
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
            value={password}
            type="password"
          />
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              type="password"
            />
          </div>
          <FormBtn onClick={handleFormSubmit}>Submit</FormBtn>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

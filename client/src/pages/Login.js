import React, { useState, useEffect, useContext } from "react";
import Logo from "../components/Logo";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import { Input, FormBtn } from "../components/Form";

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { loginUser, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userObject;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const mailformat = /.+@.+\..+/;
    if (email === "" || password === "") {
      setAlert("Please enter all available fields.", "danger");
    } else if (!email.match(mailformat)) {
      setAlert("Please enter a valid email address.", "danger");
    } else {
      loginUser({
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <h3>Account Log in</h3>
      <form>
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
          placeholder="password"
          value={password}
          type="password"
        />
        <FormBtn onClick={handleFormSubmit}>Log in</FormBtn>
      </form>
    </div>
  );
};

export default Login;

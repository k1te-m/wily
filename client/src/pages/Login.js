import React, { useState } from "react";
import Logo from "../components/Logo";

const Login = (props) => {
  const [userObject, setUserObject] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="container">
      <p>login</p>
    </div>
  );
};

export default Login;

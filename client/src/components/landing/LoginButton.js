import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LoginBtn = styled(motion.button)`
  width: 100%;
`;

const LoginButton = () => {
  return (
    <Link to="/login">
      <LoginBtn>Log in</LoginBtn>
    </Link>
  );
};

export default LoginButton;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUpBtn = styled(motion.button)`
  width: 100%;
`;

const SignUpButton = () => {
  return (
    <Link to="/signup">
      <SignUpBtn>Sign up</SignUpBtn>
    </Link>
  );
};

export default SignUpButton;

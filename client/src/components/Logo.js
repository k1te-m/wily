import React from "react";
import styled from "styled-components";

const LogoImg = styled.img`
  position: fixed;
  top: 0.5rem;
  left: 2%;
`;

const Logo = () => {
  return <LogoImg src="../../favicon.ico" />;
};

export default Logo;

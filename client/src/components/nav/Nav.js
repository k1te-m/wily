import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AnimatedNav from "./AnimatedNav";
import { motion } from "framer-motion";

const NavButton = styled(motion.button)`
  position: fixed;
  right: 0%;
  background-color: transparent;
  border: none;
  margin-top: 0.7rem;
  padding: 0px;
  :focus {
    outline: none;
  }
  i {
    font-size: 2rem;
    color: black;
    margin-right: 10px;
  }
`;

const NavigationContainer = styled.div``;

const NavBarLI = styled(motion.li)``;

const Nav = () => {
  const [navOpen, toggle] = useState(false);

  function handleOpenNav(open) {
    toggle(open);
  }

  return (
    <>
      <NavButton onClick={() => handleOpenNav(true)}>
        <i className="fas fa-bars" />
      </NavButton>
      <AnimatedNav navOpen={navOpen} handleClose={() => handleOpenNav(false)}>
        <NavigationContainer className="container">
          <ul>
            <NavBarLI
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>Home</span>
            </NavBarLI>
          </ul>
        </NavigationContainer>
      </AnimatedNav>
    </>
  );
};

export default Nav;

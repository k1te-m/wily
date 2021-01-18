import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

const NavigationContainer = styled(motion.div)`
  width: 65%;
  height: auto;
  padding: 10px 10px 35px 10px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #black;
  border-radius: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: -6%;
  transform: translate(-50%, -50%);
  height: auto;
  width: auto;
  background: transparent;
  border: none;
  padding: 0px;
  i {
    padding: 5px;
  }
  margin: 0;
  font-size: 1.5rem;
  color: #182628;
`;

const navVariant = {
  initial: { opacity: 0 },
  navOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: "-50%", transition: { type: "spring" } },
  navOpen: { top: "50%" },
  exit: { top: "-50%" },
};

const AnimatedNav = ({ handleClose, children, navOpen }) => {
  return (
    <AnimatePresence>
      {navOpen && (
        <Overlay
          initial={"initial"}
          animate={"navOpen"}
          exit={"exit"}
          variants={navVariant}
        >
          <NavigationContainer variants={containerVariant}>
            {children}
            <CloseButton onClick={handleClose}>
              <i className="far fa-times-circle" />
            </CloseButton>
          </NavigationContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default AnimatedNav;

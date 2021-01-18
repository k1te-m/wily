import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import styled, { keyframes } from "styled-components";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <StyledAlert key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-exclamation-circle" /> {alert.message}
      </StyledAlert>
    ))
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledAlert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 1.5s linear;
`;

export default Alerts;

import React, { useReducer } from "react";
import { REMOVE_ALERT, SET_ALERT } from "../types";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { v4 as uuid } from "uuid";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type, timeout = 5000) => {
    const id = uuid();
    dispatch({
      type: SET_ALERT,
      payload: { message, type, id },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

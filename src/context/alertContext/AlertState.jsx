import React, { useReducer } from "react";
import AlertContext from "../alertContext/alertContext";
import alertReducer from "../alertContext/alertReducer";
import axios from "axios";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //SET ALERT

  const setAlert = (msg, type) => {
  dispatch({
      type: SET_ALERT,
      payload: {msg,type}
  });

    setTimeout(() => {
      dispatch({type: REMOVE_ALERT})
    }, 2000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

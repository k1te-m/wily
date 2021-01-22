import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  LOGIN_FAIL,
  SET_CURRENT_POST,
  LIKE_POST,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    currentPost: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("/api/auth/user");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register user
  const registerUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth/register", data, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login user
  const loginUser = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/auth/login", data, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
    } catch (err) {}
  };

  // Logout user
  const logout = () => dispatch({ type: LOGOUT });

  // Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Set Current Post for likes
  const setCurrentPost = async (id) => {
    try {
      const res = await axios.get("/api/posts/fav/" + id);
      console.log(res.data);
      dispatch({
        type: SET_CURRENT_POST,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const likePost = async (post) => {
    try {
      dispatch({
        type: LIKE_POST,
        payload: post.likesCount + 1,
      });
    } catch (e) {}
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        currentPost: state.currentPost,
        registerUser,
        loadUser,
        loginUser,
        logout,
        clearErrors,
        setCurrentPost,
        likePost,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

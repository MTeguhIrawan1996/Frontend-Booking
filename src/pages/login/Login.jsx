import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../features/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { user, loading, error } = useSelector((state) => state.login);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch(loginSuccess({ user: res.data }));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure({ error: err.response.data }));
    }
  };
  return (
    <div className="login">
      <div className="container">
        {error && <span>{error.message}</span>}
        <input
          type="text"
          className="lInput"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <input
          type="password"
          className="lInput"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick} className="btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

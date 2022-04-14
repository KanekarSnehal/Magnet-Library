import React from "react";
import { useState } from "react";
import "./auth.css";
import { authActionsConstants } from "../../reducer/index";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const { authDispatch, error } = useAuth();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleTestLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      });

      localStorage.setItem("token", data.encodedToken);
      authDispatch({
        type: authActionsConstants.GET_USER_DETAILS,
        payload: data.foundUser.firstName,
      });
      navigate("/");
    } catch (error) {
      authDispatch({
        type: authActionsConstants.USER_LOGIN_FAILURE,
        payload: `Invalid email or password, please signup if you dont have an account `,
      });
    }
  };

  const postLoginData = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
      });

      localStorage.setItem("token", data.encodedToken);
      authDispatch({
        type: authActionsConstants.GET_USER_DETAILS,
        payload: data.foundUser.firstName,
      });
      navigate("/");
    } catch (error) {
      authDispatch({
        type: authActionsConstants.USER_LOGIN_FAILURE,
        payload: `Invalid email or password, please signup if you dont have an account `,
      });
    }
  };

  return (
    <main class="main-container">
      <div class="form-container">
        <h4 class="secondary-text-color  text-center">LOG IN</h4>
        <div class="title-underline"></div>

        <form class="form-col">
          <div class="row">
            <input
              class="form-field"
              type="email"
              placeholder="Enter your email here"
              name="email"
              required
              onChange={onChangeHandler}
            />
          </div>

          <div class="row">
            <input
              class="form-field"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              onChange={onChangeHandler}
            />
          </div>

          <button
            class="btn outline-primary-btn text-center"
            type="submit"
            onClick={handleTestLogin}
          >
            LOGIN WITH TEST CREDENTIALS
          </button>

          <button
            class="btn primary-btn text-center"
            type="submit"
            onClick={postLoginData}
          >
            LOGIN
          </button>
          <div
            class="form-validation-msg"
            style={{
              display: error ? "block" : "none",
            }}
          >
            <span>
              <i class="fas fa-exclamation-circle"></i>
            </span>
            {error}
          </div>
          <div class="py-16">
            Not a user yet?
            <Link to="/signup" class="link-btn">
              Create your account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

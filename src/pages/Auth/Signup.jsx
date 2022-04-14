import React from "react";
import { useState, useReducer } from "react";
import axios from "axios";
import "./auth.css";
import { authActionsConstants } from "../../reducer/index";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/index";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const { authDispatch, error } = useAuth();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postSignupData = async () => {
    const { firstName, lastName, email, password, confirmPassword } = userInfo;
    // console.log(firstName, lastName, email, password, confirmPassword);
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
      });

      localStorage.setItem("token", data.encodedToken);
      authDispatch({
        type: authActionsConstants.GET_USER_DETAILS,
        payload: data.createdUser,
      });
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.data.error);
      console.log(error.message);
      authDispatch({
        type: authActionsConstants.USER_SIGNUP_FAILURE,
        payload: `Couldn't Signup, Please try again `,
      });
    }
  };

  const errorsInitialState = {
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    firstnameError: "",
    lastnameError: "",
  };

  const errorReducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_FIRSTNAME_ERROR":
        return { ...state, firstnameError: payload };

      case "SET_LASTNAME_ERROR":
        return { ...state, lastnameError: payload };

      case "SET_EMAIL_ERROR":
        return { ...state, emailError: payload };

      case "SET_PASSWORD_ERROR":
        return { ...state, passwordError: payload };

      case "SET_RE_PASSWORD_ERROR":
        return { ...state, confirmPasswordError: payload };

      case "CLEAR_ERRORS_ERROR":
        return { errorsInitialState };

      default:
        return state;
    }
  };

  const [fieldErrors, errorsDispatch] = useReducer(
    errorReducer,
    errorsInitialState
  );

  const onFocusClearError = (type) => {
    errorsDispatch({ type, payload: "" });
  };

  const checkFormValidity = () => {
    let error = false;
    if (
      userInfo.firstName === "" ||
      !/^[a-zA-Z]+(\s*\w*)*$/.test(userInfo.firstName)
    ) {
      errorsDispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "Please enter valid name",
      });
      error = true;
    }
    if (
      userInfo.lastName === "" ||
      !/^[a-zA-Z]+(\s*\w*)*$/.test(userInfo.lastName)
    ) {
      errorsDispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "Please enter valid surname",
      });
      error = true;
    }

    if (userInfo.email === "" || !/^.+@.+\.com$/.test(userInfo.email)) {
      errorsDispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Please enter valid email id",
      });
      error = true;
    }

    if (
      userInfo.password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(
        userInfo.password
      )
    ) {
      errorsDispatch({
        type: "SET_PASSWORD_ERROR",
        payload:
          "Password length should contain minimum 8 characters (at least one capital, small letter and number)",
      });
      error = true;
    }
    if (
      userInfo.confirmPassword === "" ||
      userInfo.password !== userInfo.confirmPassword
    ) {
      errorsDispatch({
        type: "SET_RE_PASSWORD_ERROR",
        payload: "Password does not match",
      });
      error = true;
    }
    return error;
  };

  const submitSignupForm = (e) => {
    e.preventDefault();
    if (!checkFormValidity()) {
      postSignupData();
    }
  };

  return (
    <main class="main-container">
      <div class="form-container">
        <h4 class="secondary-text-color  text-center">SIGN UP</h4>
        <div class="title-underline"></div>

        <form class="form-col">
          <div class="row">
            <div class="column-30-pc">
              <label
                for="first-name"
                class="form-label text-bold-weight form-label-required-field"
              >
                First Name
              </label>
            </div>
            <div class="column-70-pc">
              <input
                class="form-field"
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                onChange={onChangeHandler}
                onFocus={() => {
                  onFocusClearError("SET_FIRSTNAME_ERROR");
                }}
                required
              />
              <div
                class="form-validation-msg"
                style={{
                  display: fieldErrors.firstnameError ? "block" : "none",
                }}
              >
                <span>
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                {fieldErrors.firstnameError}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column-30-pc">
              <label
                for="first-name"
                class="form-label text-bold-weight form-label-required-field"
              >
                Last Name
              </label>
            </div>
            <div class="column-70-pc">
              <input
                class="form-field"
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                onChange={onChangeHandler}
                onFocus={() => {
                  onFocusClearError("SET_LASTNAME_ERROR");
                }}
                required
              />
              <div
                class="form-validation-msg"
                style={{
                  display: fieldErrors.lastnameError ? "block" : "none",
                }}
              >
                <span>
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                {fieldErrors.lastnameError}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column-30-pc">
              <label
                for="first-name"
                class="form-label text-bold-weight form-label-required-field"
              >
                Email
              </label>
            </div>
            <div class="column-70-pc">
              <input
                class="form-field"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={onChangeHandler}
                onFocus={() => {
                  onFocusClearError("SET_EMAIL_ERROR");
                }}
                required
              />
              <div
                class="form-validation-msg"
                style={{
                  display: fieldErrors.emailError ? "block" : "none",
                }}
              >
                <span>
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                {fieldErrors.emailError}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column-30-pc">
              <label
                for="first-name"
                class="form-label text-bold-weight form-label-required-field"
              >
                Password
              </label>
            </div>
            <div class="column-70-pc">
              <span class="input-with-eye-container">
                <input
                  class="form-field"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  onChange={onChangeHandler}
                  onFocus={() => {
                    onFocusClearError("SET_PASSWORD_ERROR");
                  }}
                  required
                />
                <button class="eye-container" tabindex="-1">
                  <i class="fas fa-eye-slash"></i>
                </button>
              </span>

              <div
                class="form-validation-msg"
                style={{
                  display: fieldErrors.passwordError ? "block" : "none",
                }}
              >
                <span>
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                {fieldErrors.passwordError}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column-30-pc">
              <label
                for="first-name"
                class="form-label text-bold-weight form-label-required-field"
              >
                Confirm Password
              </label>
            </div>
            <div class="column-70-pc">
              <span class="input-with-eye-container">
                <input
                  class="form-field"
                  type="password"
                  placeholder="Re-type password"
                  name="confirmPassword"
                  onChange={onChangeHandler}
                  onFocus={() => {
                    onFocusClearError("SET_RE_PASSWORD_ERROR");
                  }}
                  required
                />
                <button class="eye-container" tabindex="-1">
                  <i class="fas fa-eye-slash"></i>
                </button>
              </span>

              <div
                class="form-validation-msg"
                style={{
                  display: fieldErrors.confirmPasswordError ? "block" : "none",
                }}
              >
                <span>
                  <i class="fas fa-exclamation-circle"></i>
                </span>
                Password does not match
              </div>
            </div>
          </div>

          <button
            class="btn primary-btn text-center"
            type="submit"
            onClick={submitSignupForm}
          >
            REGISTER
          </button>
          <p>{error}</p>
          <div class="py-16">
            Already registered?
            <Link to="/login" class="link-btn">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

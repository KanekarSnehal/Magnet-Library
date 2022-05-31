import React from "react";
import "./profile.css";
import { useAuth } from "../../context/index";
import { useDocumentTitle } from "../../hooks";

export const Profile = () => {
  const { authDispatch } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const logoutHandler = (e) => {
    authDispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  useDocumentTitle();

  return (
    <>
      <h1 className="text-center">Account</h1>

      <div className="profile-container">
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">First Name</p>
          <p>{user.firstName}</p>
        </div>
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">Last Name</p>
          <p>{user.lastName}</p>
        </div>
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">Email</p>
          <p>{user.email}</p>
        </div>
        <button className="btn primary-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};

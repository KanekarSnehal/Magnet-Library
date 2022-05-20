import React from "react";
import "./profile.css";
import { useAuth } from "../../context/index";

export const Profile = () => {
  const { user, authDispatch } = useAuth();
  const logoutHandler = (e) => {
    authDispatch({ type: "USER_LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      <h1 className="text-center">Account</h1>

      <div className="display-flex-row profile-container">
        <div className="display-flex-row">
          <p className="px-16"> Name</p>
          <p>{user}</p>
          <button className="btn primary-btn" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

import React from "react";
import "./profile.css";
import { useAuth } from "../../context/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { authState, setAuthState } = useAuth();
  const { authUser } = authState;
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    localStorage.removeItem("magnetLibraryToken");
    localStorage.removeItem("magnetLibraryUser");
    setAuthState({ ...authState, authToken: null, authUser: null });
    navigate("/");
    toast.success(`Logged Out Successfully`);
  };

  return (
    <>
      <h1 className="text-center">Account</h1>

      <div className="profile-container">
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">First Name</p>
          <p>{authUser.firstName}</p>
        </div>
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">Last Name</p>
          <p>{authUser.lastName}</p>
        </div>
        <div className="profile-container-row">
          <p className="px-16 text-bold-weight">Email</p>
          <p>{authUser.email}</p>
        </div>
        <button className="btn primary-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;

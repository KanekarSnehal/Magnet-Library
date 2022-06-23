import React from "react";
import { Categories } from "../../components";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <main className="main-container">
      <div className="hero-container">
        <div className="content">
          <h3>Get Unlimited Access</h3>
          <p className="p-md">
            Unlock access to our library of varieties of videos
          </p>
          <Link to="explore">
            <button className="btn secondary-btn text-bold-weight">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="homepage-container">
        <Categories />

        <div className="spacer-3rem "></div>
      </div>
    </main>
  );
};

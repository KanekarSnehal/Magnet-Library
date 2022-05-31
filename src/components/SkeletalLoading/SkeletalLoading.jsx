import React from "react";
import "./skeletal-loading.css";

export const SkeletalLoading = () => {
  return (
    <div>
      <div className="skeleton-image skeleton"></div>
      <div className="card-content">
        <div className="avatar avatar-xs-size skeleton"></div>
        <div className="skeleton-text-section video-text">
          <div className="skeleton-text skeleton"></div>
          <div className="skeleton-text skeleton"></div>
        </div>
      </div>
    </div>
  );
};

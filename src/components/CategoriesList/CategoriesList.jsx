import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import { videoConstants } from "../../utils";

export const CategoriesList = ({ categories }) => {
  const { dataState, dataDispatch } = useData();
  const { FILTER_CATEGORY } = videoConstants;
  const navigate = useNavigate();

  return (
    <div className="flex-row">
      {categories &&
        categories.map((category) => {
          return (
            <li
              className="featured-card-size card-hover position-relative"
              key={category._id}
              onClick={() => {
                dataDispatch({
                  type: FILTER_CATEGORY,
                  payload: category.categoryName,
                });
                navigate("/explore");
              }}
            >
              <div>
                <img
                  className="card-image"
                  src={category.imageUrl}
                  alt="card image"
                />
              </div>
              <div className="text-bottom text-bold-weight">
                {category.categoryName}
              </div>
            </li>
          );
        })}
    </div>
  );
};

import React from "react";

export const CategoriesList = ({ categories }) => {
  return (
    <div className="flex-row">
      {categories &&
        categories.map((category) => {
          return (
            <li
              className="featured-card-size card-hover position-relative"
              key={category._id}
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

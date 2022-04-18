import React from "react";
import "./chips.css";
import { useData } from "../../context";
import { videoConstants } from "../../utils";

export const Chips = () => {
  const { dataState, dataDispatch } = useData();
  const { FILTER_CATEGORY } = videoConstants;
  const { filterByCategory } = dataState;

  const chips = [
    "All",
    "Music",
    "Ted",
    "Learning",
    "Motivation",
    "Stocks",
    "Short Flims",
    "Comedies",
  ];
  return (
    <div className="chips-container">
      <ul>
        {chips.map((chip) => (
          <li
            key={chip}
            className={`chip btn outline-secondary-btn 
              ${
                filterByCategory.toLowerCase() === chip.toLowerCase()
                  ? "chips-active"
                  : ""
              }`}
            onClick={() =>
              dataDispatch({ type: FILTER_CATEGORY, payload: chip })
            }
          >
            {chip}
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

import React from "react";
import "./chips.css";
import { useData } from "../../context";
import { videoConstants } from "../../utils";

export const Chips = () => {
  const { dataState, dataDispatch } = useData();
  const { FILTER_CATEGORY } = videoConstants;
  const { filterByCategory } = dataState;
  console.log(filterByCategory);

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
            className={
              filterByCategory.toLowerCase() === chip.toLowerCase()
                ? `chip btn outline-secondary-btn chips-active`
                : `chip btn outline-secondary-btn`
            }
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

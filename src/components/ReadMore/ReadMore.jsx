import React from "react";
import { useState } from "react";
import "./readmore.css";
export const ReadMore = ({ description }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <p className="readmore-text">
      {isReadMore ? description : description.slice(0, 150)}
      <small
        onClick={() => setIsReadMore(!isReadMore)}
        className="read-or-hide mx-8"
      >
        {isReadMore ? "show less" : "...read more"}
      </small>
    </p>
  );
};

import React from "react";

const StarRating = ({ maxRating = 5 }) => {
  return (
    <div>
      <div>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;

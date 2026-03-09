import React from "react";
import "./StepCard.css";

export const StepCard = ({
  number,
  title,
  description,
  image,
  className = "",
}) => {
  return (
    <div className={`step-card ${className}`}>
      {number && <span className="step-number">{number}</span>}
      {title && <h3 className="step-title">{title}</h3>}
      {description && (
        <p className="step-description">{description}</p>
      )}
      {image && (
        <div className="step-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
};
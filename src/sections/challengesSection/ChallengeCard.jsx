import React from 'react';

export const ChallengeCard = ({ 
  headerText, 
  logo,
  logoSrc,
  imageSrc, 
  subtitle, 
  items, 
  isPositive,
  savedTime,
  listImage
}) => {
  return (
    <div className={`challenge-card ${isPositive ? 'with-card' : 'without-card'}`}>

      {/* Main Image */}
      {imageSrc && (
        <div className="image-placeholder">
          <img src={imageSrc} alt={headerText || subtitle} />
        </div>
      )}

      {/* Subtitle + time pill */}
      <h3 className={`card-subtitle ${isPositive ? 'green-text' : 'red-text'}`}>
        {subtitle}

        {logo && (
  <span className="card-logo">
     <img src={logo} alt="CRM Logo" />
  </span>
)}
        {savedTime && <span className="saved-time">{savedTime}</span>}
      </h3>

      {/* List */}
      <ul className="benefits-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <span className={isPositive ? "icon-check" : "icon-cross"}>
            {isPositive ? (
          <img src={item.icon} alt="" className="bullet-icon-image" />
      ) : (
        <span className="cross-icon">✖</span>
      )}
            </span>
            <div>
            <div className="item-header">
              <strong>{item.title}</strong>
              {item.subtitle && <span className="item-subtitle">{item.subtitle}</span>}
              </div>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
import "./floatingCTA.css";

import groupAvatar from "../../assets/images/group-avatar.png";
import creditIcon from "../../assets/images/credit-card.png";
import clockIcon from "../../assets/images/clock.png";

export const FloatingCTA = () => {
  return (
    <div className="floating-cta">
      {/* TOP SECTION */}
      <div className="floating-cta-inner">
        <div className="floating-cta-left">
          <div className="avatars">
            <img src={groupAvatar} alt="users" />
          </div>

          <p>
            Join with our <strong>Thousands of professionals</strong> Now !
          </p>
        </div>

        <button className="floating-cta-btn">Get a Free Trial Now!</button>
      </div>

      {/* BOTTOM SECTION */}
      <div className="floating-cta-bottom">
        <div className="info">
          <img src={creditIcon} alt="credit" />
          <span className="floating-strong">No Credit Card</span>
          <span className="floating-required"> Required</span>
        </div>

        <div className="info">
          <img src={clockIcon} alt="clock" />
          <span className="floating-strong">14 Days Free</span>
          <span className="floating-required">Trial</span>
        </div>
      </div>
    </div>
  );
};

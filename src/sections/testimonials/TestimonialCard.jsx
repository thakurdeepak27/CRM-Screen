import victorImage from "../../assets/images/victor.png";

export const TestimonialCard = ({
  quote,
  name,
  role,
  rating = 5,
  avatar,
}) => {
  return (
    <div className="testimonial-card">
      <div className="card-contait">
      <p className="testimonial-quote">{quote}</p>
    
      {/* Stars */}
      <div className="testimonial-rating-row">
        <div className="reting-image" >
        <img
          src={victorImage}
          alt={name}
          className="testimonial-rating-image"
        />
        </div>

        <div className="testimonial-stars">
          {"★".repeat(rating)}
        </div>
      </div>
      </div>

      <div className="card-footer" >
      {/* Divider */}
      <div className="testimonial-divider"></div>

      {/* Footer */}
      <div className="testimonial-footer">
        <img
          src={avatar || "https://i.pravatar.cc/100"}
          alt={name}
          className="testimonial-avatar"
        />
        <div>
          <h4 className="testimonial-name">{name}</h4>
          <span className="testimonial-role">{role}</span>
        </div>
      </div>
      </div>
    </div>
  );
};
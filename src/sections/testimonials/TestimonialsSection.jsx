// import { ImonialCard } from "./TestimonialCard";
import { TestimonialCard } from "./TestimonialCard";
import avatar1 from "../../assets/images/avatar-users1.png";
import avatar2 from "../../assets/images/avatar-users2.png";
import avatar3 from "../../assets/images/avatar-users3.png";

import "./testimonials.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const testimonialsData = [
  {
    quote:
      "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
    name: "Lillian Williams",
    role: "On Capterra",
    rating: 5,
    avatar: avatar1,
  },
  {
    quote:
      "“My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”",
    name: "Lillian Williams",
    role: "On Capterra",
    rating: 5,
    avatar: avatar2,
  },
  {
    quote:
      "“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“",
    name: "Michael",
    role: "On Capterra",
    rating: 5,
    avatar: avatar3,
  },
];

export const TestimonialsSection = ({ title, data }) => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            What people are saying about LeadCRM
          </h2>
          <div className="testimonial-arrows">
            <button className="arrow-btn">
              {/* <ChevronLeft width={12px} height=7.19px/> */}
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button className="arrow-btn active">
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
        <div className="testimonials-grid">
          {testimonialsData?.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";

function feedback(props) {
  return (
    <div className="testimonial_info">
      <div className="client dimension">
        <div className="client_feedback">
          <p>{props.feedback.feedback}</p>
          <div className="feedback_tooltip"></div>
        </div>
        <div className="client_info row dimension">
          <div className="client_img">
            <img aria-label="client image" 
              src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png"
              alt="client profile"
            />
          </div>
          <div className="client_name">
            <h2 title={props.feedback.clientName}>{props.feedback.clientName}</h2>
            <p title={props.feedback.company}>{props.feedback.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default feedback;

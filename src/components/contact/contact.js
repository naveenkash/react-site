import React from "react";
import "../../styles/contact.scss";
import Form from './contactForm'
function contact() {
  return (
    <div className="contact dimension">
        <div className="contact_overlay"></div>
      <div className="wrapper">
        <div className="contact_wrapper">
          <div className="contact_head">
            <h1 aria-label="Convinced To Work ith Us?">Convinced To Work ith Us?</h1>
            <p aria-label="Company has helped agencies keep their promises to clients since 2005">
              Company has helped agencies keep their promises to clients since
              2005
            </p>
          </div>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default contact;

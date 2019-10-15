import React from "react";
import HeaderImg from "../../img/startup-593341_1920.jpg";
import ServiceItem from "./headerService";
import "../../styles/header.scss";
function header() {
  const service = [
    { name: "Service name",img:'https://www.freeiconspng.com/uploads/operations-icon-0.png' },
    { name: "Service name" ,img:'https://www.freeiconspng.com/uploads/operations-icon-0.png' },
    { name: "Service name",img:'https://www.freeiconspng.com/uploads/operations-icon-0.png'  }
  ];
  return (
    <header>
      <div className="header">
        <div className="header_wrapper">
          <div className="overlay"></div>
          <div className="header_image">
            <img
              aria-label="Header background image"
              src={HeaderImg}
              alt="Header background"
            />
          </div>
          <div className="header_content">
            <h1>
              Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </h1>
            <div className="header_services row">
              {service.map((service,i) => (
                <ServiceItem key={i} service={service} />// do not use index as key's ever
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;

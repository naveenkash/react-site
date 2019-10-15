import React from "react";
import "../../styles/testimonial.scss";
import Feedback from "./feedback";
function testimonial() {
  const feedBackArray = [
    {
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        non facilis quidem delectus laudantium omnis laborum,
        blanditiis consequuntur`,
      clientName: "John Doe",
      company: "Position,Org"
    },
    {
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          non facilis quidem delectus laudantium omnis laborum,
          blanditiis consequuntur  delectus laudantium omnis laborum,
          blanditiis consequun  delectus laudantium omnis laborum,
          blanditiis consequun`,
      clientName: "John Doe",
      company: "Position,Org"
    },
    {
      feedback: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          non facilis quidem delectus laudantium omnis laborum,
          blanditiis consequuntur`,
      clientName: "John Doe",
      company: "Position,Org"
    }
  ];
  return (
    <div className="testimonial dimension">
      <div className="wrapper">
        <div className="testimonial_wrapper dimension row">
          {feedBackArray.map((feedback, i) => (
            <Feedback key={i} feedback={feedback} />// do not use index as key's ever
          ))}
        </div>
      </div>
    </div>
  );
}

export default testimonial;

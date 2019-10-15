import React from "react";

function list_items(props) {
  return (
    <ul className={props.propClass}>
      <li aria-label="About">
        <a href="https://naveenkashyap.com">About</a>
      </li>
      <li aria-label="Services">
        <a href="https://naveenkashyap.com">Services</a>
      </li>
      <li aria-label="Solutions">
        <a href="https://naveenkashyap.com">Solutions</a>
      </li>
      <li aria-label="Blog">
        <a href="https://naveenkashyap.com">Blog</a>
      </li>
      <li aria-label="Get in touch">
        <a href="https://naveenkashyap.com">Get in touch</a>
      </li>
    </ul>
  );
}

export default list_items;

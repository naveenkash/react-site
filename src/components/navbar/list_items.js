import React from "react";

function list_items(props) {
  return (
    <ul className={props.propClass}>
      <li aria-label="About">
        <a href="https://naveenkashyp.com">About</a>
      </li>
      <li aria-label="Services">
        <a href="https://naveenkashyp.com">Services</a>
      </li>
      <li aria-label="Solutions">
        <a href="https://naveenkashyp.com">Solutions</a>
      </li>
      <li aria-label="Blog">
        <a href="https://naveenkashyp.com">Blog</a>
      </li>
      <li aria-label="Get in touch">
        <a href="https://naveenkashyp.com">Get in touch</a>
      </li>
    </ul>
  );
}

export default list_items;

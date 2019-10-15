import React from "react";
function showMobileNav(props){
    props.openMobileNav(true);
}
function burger(props) {
  return (
    <div onClick={() => showMobileNav(props)} className="burger">
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </div>
  );
}

export default burger;

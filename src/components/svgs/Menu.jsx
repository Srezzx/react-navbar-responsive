import React from "react";

const MenuIcon = ({ color = "black", marginL = "0px", marginR = "0px" }) => {
  return (
    <div style={{ marginLeft: `${marginL}`, marginRight: `${marginR}` }}>
      <svg fill={color} viewBox='0 0 100 80' width='40' height='40'>
        <rect width='85' height='10'></rect>
        <rect y='20' width='85' height='10'></rect>
        <rect y='40' width='85' height='10'></rect>
      </svg>
    </div>
  );
};

export default MenuIcon;

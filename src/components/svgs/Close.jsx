import React from "react";

const CloseIcon = () => {
  return (
    <div>
      <svg
        viewBox='0 0 50 50'
        width='20'
        height='20'
        // overflow='visible'
        stroke='red'
        stroke-width='5'
        stroke-linecap='round'
      >
        <line x1='0' y1='0' x2='50' y2='50' />
        <line x1='50' y1='0' x2='0' y2='50' />
      </svg>
    </div>
  );
};

export default CloseIcon;

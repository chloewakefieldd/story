import React from "react";
import './Event.css';

const Event = ({ year, label }) => {
  const left = 800 + (year - 738 + 1) * 30 -0.5;

  const customStyles = {
    left: `${85 + left}px`
  };

  return (
    <div className="Event" style={customStyles}>
      <div className="EventText" id="EventText">{label}</div>
    </div>
  );
};

export default Event;

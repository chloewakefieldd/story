import React from "react";
import './Timeline.css';

const Text = ({ text }) => {
  return (
    <>
      <div className="text">{text}</div>
      <div className="textBackground"></div>
    </>
  );
};

const Label = ({ text }) => {
  return (
    <div className="label">
      <Text text={text} />
    </div>
  );
};

const Timeline = ({ label, startYear, maxYear }) => {
  const years = Array(maxYear + 1).fill(null);
  return (
    <div className="timeline">
      <Label text={label} />
      {years.map((_, index) => (
        <Label key={index} text={startYear + index} />
      ))}
    </div>
  );
};

export default Timeline;

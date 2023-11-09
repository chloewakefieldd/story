import React from "react";
import './Character.css';

const Text = ({ text }) => {
  return (
    <>
      <div className="text2">{text}</div>
      <div className="textBackground2"></div>
    </>
  );
};

const Label = ({ text }) => {
  return (
    <div className="label2">
      <Text text={text} />
    </div>
  );
};

const Character = ({ name, birthYear, ageAtDeath, ilyysen }) => {
  const years = Array(ageAtDeath + 1).fill(null);

  const marginLeft = (birthYear - 738 + 1) * 30;

  const customStyles = {
    marginLeft: `${marginLeft}px`,
    backgroundColor: ilyysen ? 'rgb(142 115 30)' : null
  };

  return (
    <>
      <div className="character" style={customStyles}>
        <Label text={`${name} (${ageAtDeath})`} />
        {years.map((_, index) => (
          <Label key={index} text={index} />
        ))}
      </div>
      <div className="characterlabel">
        {name}
      </div>
    </>
  );
};

export default Character;

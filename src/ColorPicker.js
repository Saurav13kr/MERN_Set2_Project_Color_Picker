import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor}}
      >
        Pick a color
      </button>
      {showColorList && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ul>
      )}
      {selectedColor && (
        <div style={{fontSize: "large"}}>
          Selected Color: <span >{selectedColor}</span>
          <p>  </p>
          <a href="https://github.com/Saurav13kr">GitHub</a>
          <p>  </p>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;

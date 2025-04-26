import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPickerPlugin = ({ core }) => {
  const [color, setColor] = useState('#000000');
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    core.context.style.applyStyle({ color: color.hex });
  };

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)} style={{ backgroundColor: color }}>
        Text Color
      </button>
      {isVisible && (
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
        </div>
      )}
    </div>
  );
};

export default ColorPickerPlugin;

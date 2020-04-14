import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div>
      <button
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }
      >
        {showColorPicker ? "close color picker" : "pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h2>you picked color {color} </h2>
    </div>
  );
};

export default ColorPicker;

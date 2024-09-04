//PrimeReact ColorPicker
//PrimeReact offers a versatile ColorPicker component that can be used in both inline and popup modes.
//It supports different color formats like HEX, RGB, and HSB.

//Features:
//Inline and popup modes
//Supports HEX, RGB, and HSB formats
//Customizable

// npm install primereact

import React, { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";

const ColorComponent1 = () => {
  const [color, setColor] = useState("#6466f1");

  return (
    <>
      <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
      <p>Picked Color : {color}</p>
    </>
  );
};

export default ColorComponent1;

//react-colorful is a lightweight and fast color picker component for React and Preact apps.
//It supports various color models and is highly customizable.
//Features:
//Small and fast
//Tree-shakeable
//Mobile-friendly
//Accessible

// npm install react-colorful


import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColourComponent = () => {
  const [color, setColor] = useState("#aabbcc");

  return(<>
  <HexColorPicker color={color} onChange={setColor} />
  <p>Picked Colour: {color}</p>
  </>);
};

export default ColourComponent;

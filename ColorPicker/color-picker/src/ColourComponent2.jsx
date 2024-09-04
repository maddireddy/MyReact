// npm install @syncfusion/ej2-react-inputs

import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColourComponent2 = () => {
  const [color, setColor] = useState("#008000");

  return (
    <>
      <ColorPickerComponent
        value={color}
        change={(e) => setColor(e.currentValue.hex)}
      />
      <p>Picked Colour : {color}</p>
    </>
  );
};

export default ColourComponent2;

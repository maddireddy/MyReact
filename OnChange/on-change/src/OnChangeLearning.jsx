import React, { useState } from "react";

function OnChangeComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Current Value: {value}</p>
    </div>
  );
}
export default OnChangeComponent;

import React, { useState } from 'react';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? 'Disable Textboxes' : 'Enable Textboxes'}
      </button>
      <div>
        <input type="text" disabled={!isToggled} placeholder="Textbox 1" />
        <input type="text" disabled={!isToggled} placeholder="Textbox 2" />
        <input type="text" disabled={!isToggled} placeholder="Textbox 3" />
      </div>
    </div>
  );
}

export default App;

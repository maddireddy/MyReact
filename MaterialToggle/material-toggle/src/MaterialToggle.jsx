import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={checked ? 'On' : 'Off'}
      />
    </FormGroup>
  );
}

export default ToggleSwitch;

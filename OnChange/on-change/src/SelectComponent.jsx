import React, { useState } from 'react';

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOptionRadio, setSelectedOptionRadio] = useState('option1');

  const handleChangeRadio = (event) => {
    setSelectedOptionRadio(event.target.value);
  };


  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>

      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleChangeRadio}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleChangeRadio}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleChangeRadio}
        />
        Option 3
      </label>
      <p>Selected Option: {selectedOptionRadio}</p>
    </div>
  );
};

export default SelectComponent;

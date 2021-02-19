import React from "react";

//The inputField has all the li and label tag which increases readability of the code

const InputField = ({ name, id, value, onChange, label, checkedValue }) => {
  return (
    <div className="d-flex flex-row ml-2">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={value === checkedValue}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default InputField;

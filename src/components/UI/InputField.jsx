import React from 'react';

const InputField = ({
  name,
  label,
  type,
  placeholder,
  onChange,
  value,
  customStyle,
}) => {
  return (
    <div className="border p-3">
      <label
        className="form-label m-2 fw-bold"
        style={customStyle}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="form-control"
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;

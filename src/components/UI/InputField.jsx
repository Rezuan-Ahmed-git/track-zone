const InputField = ({ name, label, type, placeholder, onChange, value }) => {
  return (
    <>
      <label className="form-label" htmlFor={name}>
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
    </>
  );
};

export default InputField;

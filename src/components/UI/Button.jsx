const Button = ({ title, onClick, type, customStyle }) => {
  return (
    <>
      <button
        className="btn btn-info fw-bold text-white"
        style={customStyle}
        type={type}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;

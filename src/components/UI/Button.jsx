const Button = ({ title, onClick, type }) => {
  return (
    <>
      <button className="btn btn-light" type={type} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;

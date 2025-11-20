import "../styles/components/button.css";

const Button = ({ label, onClick, type = "primary" }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

const labelButton = (label) => {
  alert(`A label deste botão é ${label}`);
};
const Button = ({ label }) => {
  return <button onClick={() => labelButton(label)}>{label}</button>;
};
export default Button;

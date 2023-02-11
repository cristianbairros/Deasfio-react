const Text = ({ children, textTransform, color }) => {
  return (
    <div style={{ textTransform: textTransform, color: color }}>{children}</div>
  );
};
export default Text;

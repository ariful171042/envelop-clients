const Button = ({ text, submit }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className="mt-5 bg-violet-500 text-white py-3 rounded hover:bg-violet-600"
    >
      {text}
    </button>
  );
};

export default Button;

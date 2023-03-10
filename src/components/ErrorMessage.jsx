const ErrorMessage = ({ error }) => {
  return (
    <div>
      <p className="bg-rose-50 text-rose-500 p-5 rounded border border-rose-500">
        {error}
      </p>
    </div>
  );
};

export default ErrorMessage;

import React from "react";

const Button = ({ text, submit, logout, handelLogout }) => {
  return (
    <button
      onClick={handelLogout ? handelLogout : null}
      type={submit ? "submit" : ""}
      className={` bg-violet-500 text-white p-3 rounded  ${
        logout
          ? "bg-rose-500 hover:bg-rose-600"
          : "bg-violet-500 hover:bg-violet-600 mt-5"
      }`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);

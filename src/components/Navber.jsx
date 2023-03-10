import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from "./Button";

const Navber = () => {
  const { user, dispatch } = useAuthContext();

  const handelLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
  };
  return (
    <header className="py-10 flex justify-between">
      <div className="logo text-xl font-semibold hover:text-violet-500 duration-300">
        <Link to="/">Envelop</Link>
      </div>
      <nav>
        {!user && (
          <div className="flex gap-5 ">
            <Link
              className="login hover:text-violet-500 hover:underline duration-300 underline-offset-2"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="register hover:text-violet-500 hover:underline duration-300 underline-offset-2"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-5 items-center">
            <p>
              Logged in as: <span className="text-violet-500">{user.name}</span>
            </p>
            <Button handelLogout={handelLogout} text="Logout" logout />
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navber);

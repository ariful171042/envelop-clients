import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <header className="py-10 flex justify-between">
      <div className="logo text-xl font-semibold hover:text-violet-500 duration-300">
        <Link to="/">Envelop</Link>
      </div>
      <nav>
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
        {/* <div className="">
          <p>Logged in as: <span>Ariful</span></p>
        </div> */}
      </nav>
    </header>
  );
};

export default Navber;

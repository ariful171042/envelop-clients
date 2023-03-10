import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/errorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading, error } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(formFields.email, formFields.password);
  };
  return (
    <div className="login mt-20 flex flex-col justify-center items-center">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <SectionTitle title={"Login..."} />

        <FormControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="Write Your email?"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <FormControl
          label="password"
          labelInner="Password"
          inputType="password"
          placeholder="Write Your password"
          formFields={formFields}
          setFormFields={setFormFields}
        />
        <Button
          handleLogin={handleLogin}
          text={isLoading ? "Logging..." : "Login"}
          submit
        />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Login);

import React, { useState } from "react";
import Button from "../components/Button";
import ErrorMessage from "../components/errorMessage";
import FormControl from "../components/FormControl";
import SectionTitle from "../components/SectionTitle";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { signup, isLoading, error } = useSignup();

  const handleRegister = async (e) => {
    e.preventDefault();

    await signup(formFields.name, formFields.email, formFields.password);

    //clear state
    // setFormFields({
    //   name: "",
    //   email: "",
    //   password: "",
    // });
  };
  return (
    <div className="register mt-20 flex flex-col justify-center items-center">
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <SectionTitle title={"Register..."} />

        <FormControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="Write Your name"
          formFields={formFields}
          setFormFields={setFormFields}
        />
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
        <Button text={isLoading ? "Registering..." : "Register"} submit />
        {error && <ErrorMessage error={error} />}
      </form>
    </div>
  );
};

export default React.memo(Register);

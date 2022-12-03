import React, { useContext, createContext, useEffect } from "react";

const FormContext = createContext({});

const useForm = () => {
  return useContext(FormContext);
};

const Input = ({ name, className = "" }) => {
  const { formState, handleChange } = useForm();
  return (
    <React.Fragment>
      <label htmlFor={name}>{name}: </label>
      <input
        value={formState[name] || ""}
        className={`bg-black rounded-lg py-2 px-4 outline-none text-gray-600 ${className}`}
        onChange={handleChange}
        name={name}
      />
    </React.Fragment>
  );
};

const Submit = ({ className, children }) => {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

const Form = ({
  handleSubmit,
  formState,
  setFormState,
  handleChange,
  children,
}) => {
  return (
    <FormContext.Provider value={{ formState, setFormState, handleChange }}>
      <form
        onSubmit={handleSubmit}
        className="grid gap-2 grid-cols-[80px_480px]"
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export { Form, Input, Submit };

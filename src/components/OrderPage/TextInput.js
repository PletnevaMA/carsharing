import React, { useRef } from "react";

const TextInput = ({
  value,
  setValue,
  input: { name, label },
  labelclass, 
  inputclass,
  placeholder
  
}) => {
  const inputref = useRef(null);

  const inputChange = (e) => {
    e.preventDefault();
    setValue({
      name,
      value: e.target.value,
    });
  };

  return (
    <>
      <label className={labelclass} htmlFor={name}>
        {label}
      </label>
      <input
        className={inputclass}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={inputChange}
        required
        ref={inputref}
      />
    </>
  );
};

export default TextInput;

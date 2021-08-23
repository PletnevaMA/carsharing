import React, { useRef } from "react";

const TextInput = ({
  value,
  setValue,
  input: { name, label },
  labelclass, 
  inputclass,
  onChange,
  placeholder,
  datalistName,
  type
  
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
        type = {type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange= {inputChange}
        required
        ref={inputref}
        list = {datalistName}
       
      />
    </>
  );
};

export default TextInput;

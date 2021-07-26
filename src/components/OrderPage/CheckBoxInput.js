import React from "react";

const FilterInput = ({ name, typeinput, clas, label, setActive, filter }) => {
  const changeHandler = (e) => setActive(e.target.value);
 
  return (
    <>    
      <input
        className={`${clas}__input`}
        type={typeinput}
        name={name}
        id={name}
        value={name}        
        checked={filter.includes(name)}
        onChange={changeHandler}
      />
      <label className={`${clas}__label`} htmlFor={name}>
        {label}
      </label>
    </>
  );
};
export default FilterInput;

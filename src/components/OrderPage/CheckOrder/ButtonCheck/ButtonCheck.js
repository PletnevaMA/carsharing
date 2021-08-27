import React from "react";
import "./ButtonCheck.scss";
import { Link } from "react-router-dom";


const ButtonCheck = (props) => {  
 
  return (   
    <Link to={props.button_link} onClick = {props.tabButtonClick}> 
    <button
      className={`button-result ${props.color} `}
      type="submit"
      disabled = {!props.isActive}
    >
      <p className="button-result__text">{props.button} </p>
    </button>
    </Link>
  );
};
export default ButtonCheck;

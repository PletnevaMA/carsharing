import React from "react";
import "./ButtonCheck.scss";
import { useDispatch } from "react-redux";
import { setTab} from '../../../../store/action';
import {Link} from "react-router-dom";

const ButtonCheck = (props) => {
  const dispatch = useDispatch();
    const tabButtonClick = (tab) => {
      dispatch(setTab(tab));
    };


  return (
    <Link to={props.link}>
      <button onClick = {tabButtonClick(props.tab)} className={`button-result ${props.color} ${props.isActive ? "" : "button-result__disabled"}`} >
        <p className="button-result__text">{props.text}</p>
      </button>
   </Link>
  );
};
export default ButtonCheck;

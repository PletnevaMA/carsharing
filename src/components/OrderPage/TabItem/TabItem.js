import { TitleTabs } from "../../../const";
import React from "react";
import "./TabItem.scss";
import { Link } from "react-router-dom";
const TabItem = ({ tab, link, tabButtonClick, isCurrent, available, visit}) => {
  
  return (
    <li
      id="button"
      className="tabs__item"
      data-tab = {tab}
      onClick = {tabButtonClick}
    >
      <Link to={link}>
        <button        
          className = {`tabs__button ${isCurrent ? "tabs__button__active" : "" }`}
          type="button"
          disabled={!(isCurrent || available || visit)}          
        >
          {TitleTabs[tab]}
        </button>
      </Link>
    </li>
  );
};

export default TabItem;

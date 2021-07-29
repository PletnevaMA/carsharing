import { TitleTabs } from "../../../const";
import React from "react";
import "./TabItem.scss";

const TabItem = ({ tab, tabButtonClick, isCurrent, isDisabled}) => {
  return (
    <li className="tabs__item" data-tab={tab} onClick={tabButtonClick}>
      <button
        className={`tabs__button ${isCurrent ? "tabs__button__active" : ""} ${
          isDisabled ? "tabs__button__disable" : ""
        }`}
        type="button"
        disabled={isDisabled}
      >
        {TitleTabs[tab]}
      </button>
    </li>
  );
};

export default TabItem;

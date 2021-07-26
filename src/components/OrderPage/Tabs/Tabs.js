import React from "react";
import { useDispatch } from "react-redux";
import '../TabItem/TabItem.scss';
import { Tabs } from "../../../const";
import { setTab } from "../../../store/action";
import TabItem from '../TabItem/TabItem';

const Tab = ({ tab }) => {
  const dispatch = useDispatch();
  let isDisabled = false;
  let tabList = [];

  const tabButtonClick = (e) => {
    e.preventDefault();
    dispatch(setTab(e.target.closest(".tabs__item").dataset.tab));
  };

  for (const [, value] of Tabs) {
    tabList.push(
      <TabItem
        key={value}
        tab={value}
        tabButtonClick={tabButtonClick}
        isCurrent={value === tab}
        isDisabled={isDisabled}    
      />
    );
    if (value === tab) {
      isDisabled = true;
    }
  }
  return <ol className="tabs">{tabList}</ol>;
};

export default Tab;

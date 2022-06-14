import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../TabItem/TabItem.scss";
import { Tabs } from "../../../const";
import { setTab, setActive } from "../../../store/action";
import TabItem from "../TabItem/TabItem";

const Tab = ({ tab }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.isActive);
  const visitedTab = useSelector((state) => state.visitedTab);
  const activeTab = useSelector((state) => state.tab);
  let available;
  let tabList = [];
  let visit = true;
  let next = false;
  const tabButtonClick = (e) => {
    e.preventDefault();
    dispatch(setTab(e.target.closest(".tabs__item").dataset.tab));
    dispatch(setActive(false));
  };
  for (const [, value] of Tabs) {
    if (next === false) {
      available = false;
    }
    if (next === true) {
      available = isActive;
      next = false;
    }
    if (value === activeTab) {
      available = false;
      visit = false;
      next = true;
    }

    tabList.push(
      <TabItem
        key={value}
        tab={value}
        link={`/order/${value}`}
        tabButtonClick={tabButtonClick}
        isCurrent={value === tab}
        available={available}
        visit={visitedTab.includes(value)}
      />
    );
  }
  return <ol className="tabs">{tabList}</ol>;
};

export default Tab;

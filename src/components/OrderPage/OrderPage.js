import React from "react";
import { connect } from "react-redux";
import Logo from "../Logo/Logo";
import Tab from "./Tabs/Tabs";
import RecordPositionUser from "./RecordPositionUser/RecordPositionUser";
import CarSelection from "./CarSelection/CarSelection";
import AdditionalOptions from "./AdditionalOptions/AdditionalOptions";
import CheckingOrderData from "./CheckingOrderData/CheckingOrderData";
import {Tabs} from '../../const';
import "./OrderPage.module.scss";

const OrderPage = ({ tab }) => {
  const setTab = (tab) => {
    switch (tab) {
      case Tabs.get("POSITION"):
        return <RecordPositionUser />;
      case Tabs.get("CAR"):
        return <CarSelection />;
      case Tabs.get("OPTIONS"):
        return <AdditionalOptions />;
      case Tabs.get("ORDER"):
        return <CheckingOrderData />;
      default:
        return <RecordPositionUser />;
    }
  };
  return (
    <div className="container__full">
      <div className="container__full__content">
        <Logo />
        <Tab tab={tab} />
        {setTab(tab)}
      </div>
    </div>
  );
};

const stateProps = ({ tab }) => ({
  tab
})

export default connect(stateProps)(OrderPage);

import React from "react";
import { connect } from "react-redux";
import Logo from "../Logo/Logo";
import Tab from "./Tabs/Tabs";
import RecordPositionUser from "./RecordPositionUser/RecordPositionUser";
import CarSelection from "./CarSelection/CarSelection";
import AdditionalOptions from "./AdditionalOptions/AdditionalOptions";
import CheckingOrderData from "./CheckingOrderData/CheckingOrderData";
import OrderCompleted from './OrderCompleted/OrderCompleted';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Tabs, Path } from "../../const";
import "./OrderPage.module.scss";

const OrderPage = ({ tab }) => {
  
  return (
    <div className="container__full">
      <div className="container__full__content">
        <Logo />
        <Tab tab={tab} />             
      </div>
      <Switch>
          <Route path={Path.POSITION} render={() => <RecordPositionUser />} />
          <Route path={Path.CAR} render={() => <CarSelection />} />
          <Route path={Path.OPTIONS} render={() => <AdditionalOptions />} />
          <Route path={Path.ORDER} render={() => <CheckingOrderData />} />
          <Route path={Path.CHECK} render={() => <OrderCompleted />} />
        </Switch>
    </div>
  );
};

const stateProps = ({ tab }) => ({
  tab,
});

export default connect(stateProps)(OrderPage);

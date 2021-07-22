import React from "react";
import Logo from "../Logo/Logo";
import Tabs from "./Tabs/Tabs";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import './OrderPage.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class OrderPage extends React.Component {
  render() {
    return (
      <div className="container__full">
        <div className="container__full__content">
          <Logo />
          <Tabs />
          <Router>
            <Switch>
              <Route path="/order/step1" children={<Step1 />} />
              <Route path="/order/step2" children={<Step2 />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
export default OrderPage;

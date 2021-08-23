import React from "react";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import OrderPage from "./components/OrderPage/OrderPage";
import { OrderCompleted } from "./components/OrderPage/OrderCompleted/OrderCompleted";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecordPositionUser from './components/OrderPage/RecordPositionUser/RecordPositionUser';
import CarSelection from './components/OrderPage/CarSelection/CarSelection';
import MainPage from "./MainPage";
import { Path } from "./const";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <BurgerMenu />
          <Switch>
            <Route exact path={Path.MAIN}>
              <MainPage />
            </Route>            
            <Route path={Path.ORDERPAGE}>
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

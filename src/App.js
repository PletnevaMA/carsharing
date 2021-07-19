import React from "react";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import OrderPage from './components/OrderPage/OrderPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./MainPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">         
        <BurgerMenu />
        <Switch>
        <Route exact path = "/" children = {<MainPage/>}/>
        <Route path = "/order" children = {<OrderPage/>}/>
        </Switch>       
      </div>
      </Router>      
    );
  }
}

export default App;

import React from "react";
import "./Step2.module.scss";
import Filters from "./Filters/Filters";
import CarsList from "./CarsList/CarsList";
import Result from "../Result/Result";

class Step2 extends React.Component {
  render() {
    return (
      <div className="container__step">
       <Filters />
       <Result button = "Дополнительно" button_link = "/order/step3"  color ="green"/>
       <CarsList />      
      </div>
    );
  }
}
export default Step2;

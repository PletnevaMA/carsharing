import React from "react";
import {useSelector } from "react-redux";
import "./CarSelection.scss";
import Filters from "./FiltersCars/FiltersCars";
import CarsList from "./CarsList/CarsList";
import CheckOrder from "../CheckOrder/CheckOrder";
import {Tabs, Path} from '../../../const';


const CarSelection = () => {
  const isActive = useSelector((state) => state.isActive);
  return (
    <div className="container__step">
      <div className="step__content">        
      <Filters />     
      <CarsList />
      </div>
      <CheckOrder button="Дополнительно" button_link={Path.OPTIONS} color="green" isActive = {isActive} tab = {Tabs.get("OPTIONS")}/>
    </div>
  );
};
export default CarSelection;

import React from "react";
import CarItem from "../CarItem/CarItem";
import "./CarsList.scss";
import {cars} from '../../../../Cars';

class CarsList extends React.Component {
  render() {  

    return (
      <div className="step__content">
        <div className="carslist">
          
          {cars.map((elm) => {
            return (
              <CarItem 
              title={elm.title} 
              price={elm.price} 
              img={elm.img} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default CarsList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCar} from "../../../../store/action";
import CarInput from '../CarInput/CarInput';
import "./CarsList.scss";
import {cars} from '../../../../Cars';

const CarsList =() => {  
  
    const [activeCar, setActiveCar] = useState(useSelector((state) => state.car));
    const setCarValue = (car) => setActiveCar(car);
    const dispatch = useDispatch();
    useEffect(() => {
        setActiveCar(activeCar);
        dispatch(setCar(activeCar));
    }, [activeCar])

    return (
      <div className="step__content">
        <div className="carslist">          
          {cars.map(({ id, title, price, img }) => {
            return (
              <CarInput 
              key = {id} 
              id = {id}
              title={title} 
              price={price} 
              img={img}
              isActive={id === activeCar}
              setCarValue={setCarValue}/>
            );
          })}
        </div>
      </div>
    );
  
}
export default CarsList;

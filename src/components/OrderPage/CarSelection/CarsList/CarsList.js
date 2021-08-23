import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setCar, setPrice, setImage, setNumber, setActive} from "../../../../store/action";
import {getCarsFetch} from '../../../../store/api';
import CarInput from '../CarInput/CarInput';
import "./CarsList.scss";

const CarsList =() => {    
    const [activeCar, setActiveCar] = useState(useSelector((state) => state.car));
    const [price, setActivePrice] = useState(useSelector((state) => state.price));
    const [image, setActiveImage] = useState(useSelector((state) => state.image));
    const [number, setActiveNumber] = useState(useSelector((state) => state.carNumber));
    const isActive = useSelector((state) => state.isActive);
    const setCarValue = (car) => setActiveCar(car);
    const setCarPrice = (price) => setActivePrice(price);
    const setCarImage = (image) => setActiveImage(image);
    const setCarNumber = (number) => setActiveNumber(number);
    const cars = useSelector((state) => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCarsFetch());
        setActiveCar(activeCar);
        dispatch(setCar(activeCar));
        setActivePrice(price);
        dispatch(setPrice(price));
        setActiveImage(image);
        dispatch(setImage(image));
        setActiveNumber(number);
        dispatch(setNumber(number));
    }, [activeCar, price, image, number])

    useEffect(() => {
      if (activeCar.length > 0){
        dispatch(setActive(true));
      }
    }, [activeCar])
    return (
      <div className="step__content">
        <div className="carslist">          
          {cars.map((car) =>{
            return (
              <CarInput 
              key = {car.id} 
              id = {car.id}
              title={car.name} 
              priceMin={car.priceMin} 
              priceMax={car.priceMax}   
              imgPath = {car.thumbnail.path}   
              carNumber = {car.number}     
              isActive={car.name === activeCar}
              setCarValue={setCarValue}
              setCarPrice={setCarPrice}
              setCarImage={setCarImage}
              setCarNumber={setCarNumber}/>
            );
          })}
        </div>
      </div>
    );
  
}
export default CarsList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCar,
  setPrice,
  setImage,
  setNumber,
  setActive,
  setCarName,
} from "../../../../store/action";
import { getCarsFetch } from "../../../../store/api";
import CarInput from "../CarInput/CarInput";
import "./CarsList.scss";

const CarsList = () => {
  const [activeCar, setActiveCar] = useState(useSelector((state) => state.car));
  const [carName, setActiveName] = useState(
    useSelector((state) => state.carName)
  );
  const [price, setActivePrice] = useState(useSelector((state) => state.price));
  const [image, setActiveImage] = useState(useSelector((state) => state.image));
  const [number, setActiveNumber] = useState(
    useSelector((state) => state.carNumber)
  );
  const filter = useSelector((state) => state.filter);
  const setCarValue = (car) => setActiveCar(car);
  const setNameValue = (carName) => setActiveName(carName);
  const setCarPrice = (price) => setActivePrice(price);
  const setCarImage = (image) => setActiveImage(image);
  const setCarNumber = (number) => setActiveNumber(number);
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsFetch()).then();
    setActiveCar(activeCar);
    dispatch(setCar(activeCar));
    setActiveName(carName);
    dispatch(setCarName(carName));
    setActivePrice(price);
    dispatch(setPrice(price));
    setActiveImage(image);
    dispatch(setImage(image));
    setActiveNumber(number);
    dispatch(setNumber(number));
  }, [activeCar, price, image, number, filter]);

  useEffect(() => {
    if (activeCar.length > 0) {
      dispatch(setActive(true));
    }
  }, [activeCar]);
  let isVisible;

  return (
    <div className="carslist">
      {cars.map((car) => {
        if (filter.length === 0) {
          isVisible = true;
        } else {
          if (car.categoryId !== null) {
            isVisible = car.categoryId.name === filter;
          } else {
            isVisible = false;
          }
        }
        return (
          <CarInput
            key={car.id}
            id={car.id}
            title={car.name}
            priceMin={car.priceMin}
            priceMax={car.priceMax}
            imgPath={car.thumbnail.path}
            carNumber={car.number}
            isVisible={isVisible}
            isActive={car.id === activeCar}
            setCarValue={setCarValue}
            setNameValue={setNameValue}
            setCarPrice={setCarPrice}
            setCarImage={setCarImage}
            setCarNumber={setCarNumber}
          />
        );
      })}
    </div>
  );
};
export default CarsList;

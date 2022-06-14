import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../TextInput";
import { getCitiesFetch, getPointsFetch } from "../../../../store/api";
import "./LocationUser.scss";
import {Mapp} from "./Map";
import { PositionPosints } from "../../../../const";
import { setPosition, setActive } from "../../../../store/action";

const LocationUser = () => {
  const [position, setPositionData] = useState({
    city: useSelector((state) => state.city),
    point: useSelector((state) => state.point),
  });  
  const point = useSelector((state) => state.point);
  const cities = useSelector((state) => state.cities);
  const points = useSelector((state) => state.points);
  const [cityPoints, setCityPoints] = useState([{ name: "" }]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCitiesFetch());
    dispatch(getPointsFetch());
    const filterCityPoints = points.filter(
      (point) => point.cityId !== null && point.cityId.name === position.city
    );
    setCityPoints(
      filterCityPoints.map((point) => {
        return {
          id: point.id,
          name: point.address,
        };
      })
    );
    setPositionData(position);
    dispatch(setPosition(position));     
  }, [position]);

  useEffect(() => {
    if (point.length > 0){      
      dispatch(setActive(true));
    }
  }, [point])

  const setPositionValue = (positionValue) => {
    setPositionData({ ...position, [positionValue.name]: positionValue.value });   
  };

  return (
    <div className="location">
      {PositionPosints.map((p) => (
        <div className={`location__${p.name}`}>
          <TextInput
            key={p.name}
            setValue={setPositionValue}
            input={p}
            value={position[p.name]}
            labelclass="location__label"
            inputclass="location__input"
            placeholder={`Начните вводить `}
            datalistName={p.name}
          />
          {p.name === "city" && (
            <datalist id={p.name}>
              {cities.map((p) => {
                return <option value={p.name}></option>;
              })}
            </datalist>
          )}
          {p.name === "point" && (
            <datalist id={p.name}>
              {cityPoints.map((p) => {
                return <option value={p.name}></option>;
              })}
            </datalist>
          )}
        </div>
      ))}
      <p className="location__map">Выбрать на карте:</p>
      <Mapp/> 
    </div>
  );
};
export default LocationUser;

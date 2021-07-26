import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../TextInput";
import { setPosition } from "../../../../store/action";
import "./LocationUser.scss";
import Maps from "./Maps";
import { PositionPosints } from "../../../../const";

const LocationUser = () => {
  const [position, setPositionData] = useState({
    city: useSelector((state) => state.city),
    point: useSelector((state) => state.point),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setPositionData(position);
    dispatch(setPosition(position));
  }, [position]);

  const setPositionValue = (positionValue) =>
    setPositionData({ ...position, [positionValue.name]: positionValue.value });

  return (
    <div className="location">
      {PositionPosints.map((p) => (
        <div className={`location__city ${p.name}`}>
          <TextInput
            key={p.name}
            setValue={setPositionValue}
            input={p}
            value={position[p.name]}
            labelclass = "location__label"
            inputclass = "location__input"
            placeholder = {`Начните вводить ${p.label}`}
          />
        </div>
      ))}
      <p className="location__map">Выбрать на карте:</p>
      <Maps />
    </div>
  );
};
export default LocationUser;

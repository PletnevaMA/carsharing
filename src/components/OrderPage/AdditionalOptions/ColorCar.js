
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "../../../const";
import { setColor } from "../../../store/action";
import FilterInput from "../FilterInput";

const ColorList = [
  {
    name: Colors.ALL_COLOR,
    label: "Любой",
  },
  {
    name: Colors.RED,
    label: "Красный",
  },
  {
    name: Colors.BLUE,
    label: "Голубой",
  },
];

export const ColorCar = () => {
  const [activeColor, setActiveColor] = useState(
    useSelector((state) => state.color)
  );
  const setColorValue = (color) => {
    setActiveColor(color);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setActiveColor(activeColor);
    dispatch(setColor(activeColor));
  }, [activeColor]);
  return (
    <fieldset className="additionaly__color">
      <legend className="additionaly__color__title">Цвет</legend>
      <ul className="additionaly__color__list">
        {ColorList.map(({ name, label }) => (
          <li className="additionaly__color__item" key={name}>
            <FilterInput
              key={name}
              name={name}
              typeinput = "radio"
              clas="additionaly__color"
              label={label}
              setActive={setColorValue}
              filter={activeColor}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

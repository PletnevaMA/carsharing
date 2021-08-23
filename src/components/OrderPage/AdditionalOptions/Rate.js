import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRate } from "../../../store/action";
import { RateInput } from "../../../const";
import FilterInput from "../FilterInput";

export const Rate = () => {
  const [activeRate, setActiveRate] = useState(useSelector((state) => state.rate));
  const setRateValue = (rate) => {
    setActiveRate(rate);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveRate(activeRate);
    dispatch(setRate(activeRate));
  }, [activeRate]);
  return (
    <fieldset className="additionaly__rate">
      <legend className="additionaly__rate__title">Тариф</legend>
      <ul className="additionaly__rate__list">
        {RateInput.map((r) => (
          <li className="additionaly__rate__item">
            <FilterInput
              key={r.name}
              name={r.label}
              typeinput = "radio"
              clas = "additionaly__rate"
              label={r.label}
              setActive={setRateValue}
              filter={activeRate}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

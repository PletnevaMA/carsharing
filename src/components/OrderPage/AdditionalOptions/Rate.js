import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRate} from "../../../store/action";
import { getRateFetch } from "../../../store/api";
import { RateInput } from "../../../const";
import FilterInput from "../FilterInput";

export const Rate = () => {
  const [activeRate, setActiveRate] = useState(useSelector((state) => state.rate));
  const setRateValue = (rate) => {
    setActiveRate(rate);
  };
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRateFetch());
    setActiveRate(activeRate);
    dispatch(setRate(activeRate));
  }, [activeRate]);
  return (
    <fieldset className="additionaly__rate">
      <legend className="additionaly__rate__title">Тариф</legend>
      <ul className="additionaly__rate__list">
        {rates.map((r) => (
          <li className="additionaly__rate__item">
            <FilterInput
              key={r.id}
              name={r.rateTypeId.name}
              typeinput = "radio"
              clas = "additionaly__rate"
              label={r.rateTypeId.name}
              setActive={setRateValue}
              filter={activeRate}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

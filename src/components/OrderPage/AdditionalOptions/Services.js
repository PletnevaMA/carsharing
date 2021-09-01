import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setServices } from "../../../store/action";
import { ServicesInput } from "../../../const";

import CheckBoxInput from "../CheckBoxInput";

export const Services = () => {
  const [actionServices, setActionServices] = useState(
    useSelector((state) => state.services)
  );
  const setServicesValue = (point) => {
    const newServices = actionServices.slice();
    const index = newServices.indexOf(point);
    newServices.includes(point)
      ? newServices.splice(index, 1)
      : newServices.push(point);
      setActionServices(newServices);
  };
  const dispatch = useDispatch();
  useEffect(() => {    
    
    dispatch(setServices(actionServices));
  }, [actionServices]);

  return (
    <fieldset className="additionaly__service">
      <legend className="additionaly__service__title">Доп услуги</legend>
      <ul className="additionaly__service__list">
      {ServicesInput.map((s) =>
        <li className="additionaly__service__item">
         <CheckBoxInput
              key={s.name}
              name={s.name}
              typeinput = "checkbox"
              clas = "additionaly__service"
              label={s.label}
              setActive={setServicesValue}
              filter={actionServices}
            />
          </li>
      )}
      </ul>
    </fieldset>
  );
};

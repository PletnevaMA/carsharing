import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setActive } from "../../../store/action";
import { DateInput } from "../../../const";
import TextInput from "../TextInput";

export const DateRent = () => {
  const [actionDate, setActionDate] = useState({
    startDate: useSelector((state) => state.startDate),
    finishDate: useSelector((state) => state.finishDate),
  });
  const isActive = useSelector((state) => state.isActive);
  const setDateValue = (date) => {
    setActionDate({ ...actionDate, [date.name]: date.value });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    setActionDate(actionDate);
    dispatch(setDate(actionDate));
    if (actionDate.startDate.length > 0 && actionDate.finishDate.length > 0){
      dispatch(setActive(true));
    }
  }, [actionDate]);
  return (
    <fieldset className="additionaly__date">
      <legend className="additionaly__date__title">Дата аренды</legend>
      {DateInput.map((d) => (
        <div className="additionaly__date__block">
          <TextInput
            key={d.name}    
            value={actionDate[d.name]}           
            setValue={setDateValue}
            input={d}                     
            labelclass="additionaly__date__title"
            inputclass="additionaly__date__input"
            placeholder="Введите дату и время"
            type = "date"
          />
        </div>
      ))}
    </fieldset>
  );
};

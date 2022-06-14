import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStartDate, setFinishDate, setActive } from "../../../store/action";
import DateTimePicker from "react-datetime-picker";
import "./DateRent.scss";

export const DateRent = () => {
  const [startDate, setStartDateValue] = useState(
    useSelector((state) => state.startDate)
  );
  const [finishDate, setFinishDateValue] = useState(
    useSelector((state) => state.finishDate)
  );

  const dispatch = useDispatch();
   useEffect(() => {
   dispatch(setStartDate(startDate.toLocaleString('en-GB')));
   dispatch(setFinishDate(finishDate.toLocaleString('en-GB')));
   if (startDate.toLocaleString('en-GB').length && finishDate.toLocaleString('en-GB').length) {
    dispatch(setActive(true));
   }  
  }, [startDate, finishDate]); 

  return (
    <fieldset className="additionaly__date">
      <legend className="additionaly__date__title">Дата аренды</legend>
      <div className="additionaly__date__block">
        <div className="additionaly__date__start">
          <label className="additionaly__date__title">C</label>
          <DateTimePicker  value={startDate} format = "y-MM-dd H:mm" calendarIcon = {null} onChange={setStartDateValue}/>
        </div>
        <div className="additionaly__date__finish">
          <label className="additionaly__date__title">По</label>
          <DateTimePicker  value={finishDate} format = "y-MM-dd H:mm" calendarIcon = {null} onChange={setFinishDateValue}/>
        </div>
      </div>
    </fieldset>
  );
};

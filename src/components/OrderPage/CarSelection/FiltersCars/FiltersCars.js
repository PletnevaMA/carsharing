import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setFilter} from '../../../../store/action';
import "./FiltersCars.scss";
import { CarFilters } from "../../../../const";
import FilterInput from "../../FilterInput";

const FiltersCars = () => {  
  
  const [activeFilter, setActiveFilter] = useState(useSelector((state) => state.filter));
  const setActiveFilterValue = (filter) => setActiveFilter(filter);
  const dispatch = useDispatch();
  useEffect(() => {
      setActiveFilter(activeFilter);
      dispatch(setFilter(activeFilter));
  }, [activeFilter])
  return (
    <ul className="cars__filters">
      {CarFilters.map(({ name, label }) => (
        <li className="cars__filters__item" key={name}>
          <FilterInput
            key={name}
            name={name}
            typeinput = "radio"
            clas="cars__filters"
            label={label}
            setActive={setActiveFilterValue}
            filter={activeFilter}
          />
        </li>
      ))}
    </ul>
  );
};
export default FiltersCars;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../../../store/action";
import { getCategoriesFetch } from "../../../../store/api";
import "./FiltersCars.scss";
import FilterInput from "../../FilterInput";

const FiltersCars = () => {
  const filters = useSelector((state) => state.categories);
  const [activeFilter, setActiveFilter] = useState(
    useSelector((state) => state.filter)
  );
  const setActiveFilterValue = (filter) => setActiveFilter(filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesFetch());   
    setActiveFilter(activeFilter);
    dispatch(setFilter(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    
  })
  return (
    <ul className="cars__filters">
      {filters.map((filter) => (
        <li className="cars__filters__item" key={name}>
          <FilterInput
            key={filter.name}
            name={filter.name}
            typeinput="radio"
            clas="cars__filters"
            label={filter.name}
            setActive={setActiveFilterValue}
            filter={activeFilter}
          />
        </li>
      ))}
    </ul>
  );
};
export default FiltersCars;

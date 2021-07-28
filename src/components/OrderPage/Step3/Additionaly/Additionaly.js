import React from "react";
import "./Additionaly.module.scss";
import { Color } from "../Color";
import { Date } from "../Date";
import { Rate } from "../Rate";
import { Service } from "../Service";

export function Additionaly(props) {
  return (
    <div className="additionaly">
      <Color />
      <Date />
      <Rate />
      <Service />
    </div>
  );
}

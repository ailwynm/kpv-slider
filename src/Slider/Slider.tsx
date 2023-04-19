import React, { FunctionComponent } from "react";
import "./slider.css";

interface ISlider {
  label: string;
  max: number;
  min: number;
  step: number;
  value: number;
  unit?: string;
  onChange(value: number): void;
}

export const Slider: FunctionComponent<ISlider> = ({
  label,
  max,
  min,
  step,
  value,
  unit,
  onChange
}) => {
  return <div className="slider">Hello</div>;
};

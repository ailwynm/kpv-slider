import * as React from "react";
import "./styles.css";
import { Info } from "./Info";
import { Slider } from "./Slider/Slider";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Custom Control Slider Challenge</h1>
      <Info />
      <hr />

      <p>INTERACTIVE SLIDERS TO GO HERE</p>

      <Slider
        label="Percentage"
        min={0}
        max={100}
        unit="%"
        step={1}
        value={0}
        onChange={() => {}}
      />
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Button from "./Components/Buttons";
import Input from "./Components/Input";
import { getColorsHex } from "./Color.js";
import RGB from "./Components/RGBComponent";

export default function App() {
  let [colorR, setColorR] = useState("");
  let [colorG, setColorG] = useState("");
  let [colorB, setColorB] = useState("");

  function getColorR(e) {
    setColorR(e.target.value);
  }

  function getColorB(e) {
    setColorB(e.target.value);
  }

  function getColorG(e) {
    setColorG(e.target.value);
  }

  function getColorBody() {
    document.body.style.backgroundColor = "#" + colorR + colorG + colorB;
  }

  const colorsDECR = getColorsHex(colorR);
  const colorsDECG = getColorsHex(colorG);
  const colorsDECB = getColorsHex(colorB);

  const isValuedEmpty = colorR == "" && colorG == "" && colorB == "";

  return (
    <>
      <div>
        <Header title="Random Color Converter" />
      </div>

      <div className="container">
        <main>
          <Input value={getColorR} placeHolder="Enter Hex to Find R: " />
          <Input value={getColorG} placeHolder="Enter Hex to Find G: " />
          <Input value={getColorB} placeHolder="Enter Hex to Find B: " />
          <Button clickButtonTitle="Set Color" onClickFunction={getColorBody} />
        </main>
      </div>

      <RGB
        r={isValuedEmpty ? "None" : colorsDECR}
        g={isValuedEmpty ? "None" : colorsDECG}
        b={isValuedEmpty ? "None" : colorsDECB}
      />
    </>
  );
}

"use client";

import { useState } from "react";
import Inputs from "../components/Inputs";

export default function Home() {
  const [segments, setSegments] = useState([1]);
  const [values, setValues] = useState([{ ilgis: "", aukstis: "" }]);
  function setValuesHandler(v, parameter, index) {
    const newValues = [...values];
    parameter === "ilgis"
      ? (newValues[index].ilgis = v)
      : (newValues[index].aukstis = v);
    setValues(newValues);
  }
  function addNewHandler() {
    setSegments((prev) => [...prev, 1]);
    setValues((prev) => [...prev, { ilgis: "", aukstis: "" }]);
  }
  return (
    <div className="flex flex-col items-start gap-4 p-20">
      {segments.map((item, index) => (
        <Inputs
          key={index}
          value={values[index]}
          setValues={(v, parameter) => {
            setValuesHandler(v, parameter, index);
          }}
        />
      ))}
      <button
        className="p-2 text-white rounded-md bg-slate-800"
        onClick={addNewHandler}
      >
        add new
      </button>
    </div>
  );
}

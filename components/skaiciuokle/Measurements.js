"use client";

import Inputs from "../Inputs";
import { addSegment, clearAll, addValues } from "@/Components/redux/segments";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

export default function Measurements() {
  const segments = useSelector((state) => state.segments.segments);
  const values = useSelector((state) => state.segments.values);

  const dispatch = useDispatch();

  function setValuesHandler(value, parameter, index) {
    dispatch(addValues({ value, parameter, index }));
  }

  function addNewHandler() {
    dispatch(addSegment());
  }

  function clearAllHandler() {
    dispatch(clearAll());
  }

  return (
    <div className="flex flex-col items-start gap-1 ">
      {segments?.map((item, index) => (
        <Inputs
          key={index}
          value={values[index]}
          index={index}
          setValues={(v, parameter) => {
            setValuesHandler(v, parameter, index);
          }}
        />
      ))}
      <div className="flex w-full gap-4 pt-2 pl-8">
        <Button onClick={addNewHandler}>add new</Button>
        <Button onClick={clearAllHandler}>Clear All</Button>
      </div>
    </div>
  );
}

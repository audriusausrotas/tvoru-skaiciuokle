"use client";

import Inputs from "../Inputs";
import { addSegment, copyLast, addValues } from "@/Components/redux/segments";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { useRef } from "react";
import { useEffect } from "react";

export default function Measurements() {
  const segments = useSelector((state) => state.segments.segments);
  const values = useSelector((state) => state.segments.values);

  const firstInputRef = useRef(null);

  const dispatch = useDispatch();

  function setValuesHandler(value, parameter, index) {
    dispatch(addValues({ value, parameter, index }));
  }

  function addNewHandler() {
    dispatch(addSegment());
  }

  function copyHandler() {
    dispatch(copyLast());
  }

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [segments]);

  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex flex-wrap items-center ">
        <div className="pl-12">Ilgis cm</div>
        <div className="pl-8">Aukštis cm</div>
        <div className="pl-4">Tarpas cm</div>
      </div>
      {segments?.map((item, index) => (
        <Inputs
          key={index}
          value={values[index]}
          index={index}
          setValues={(v, parameter) => {
            setValuesHandler(v, parameter, index);
          }}
          onEnter={addNewHandler}
          firstInputRef={index === segments.length - 1 ? firstInputRef : null}
        />
      ))}
      <div className="flex flex-wrap w-full gap-4 pt-2 pl-8">
        <Button onClick={addNewHandler}>Pridėti Naują</Button>
        <Button onClick={copyHandler}>Kopijuoti Paskutinį</Button>
      </div>
    </div>
  );
}

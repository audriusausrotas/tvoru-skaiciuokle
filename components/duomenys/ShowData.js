"use client";

import CalculatedData from "./CalculatedData";
import { useSelector } from "react-redux";
import DataElement from "./DataElement";

export default function ShowData() {
  const values = useSelector((state) => state.segments.values);
  const type = useSelector((state) => state.info.type);

  const totalM2 = values.reduce(
    (acc, item) => Number(acc) + Number(item.m2),
    0
  );

  const totalSegments = values.reduce(
    (acc, item) => Number(acc) + Number(item.segments),
    0
  );
  const totalSegmentsAlt = values.reduce(
    (acc, item) => Number(acc) + Number(item.segmentsAlt),
    0
  );

  let totalHorizontals = 0;
  let totalVerticals = 1;
  let totalGateVerticals = 0;
  let totalCurbs = 0;

  let isTogether = false;
  values.forEach((item) => {
    if (!item.gates) {
      totalHorizontals++;
      totalVerticals++;
      totalCurbs++;
      isTogether = false;
    } else {
      if (!isTogether) {
        totalVerticals--;
        totalGateVerticals += 2;
      } else {
        totalGateVerticals++;
      }
      isTogether = true;
    }
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 gap-2 text-lg">
        <DataElement>Viso segmentu: {values.length}</DataElement>

        {type !== "Dija" && type !== "Dile" && (
          <DataElement>Viso kvadratu: {totalM2.toFixed(2)}</DataElement>
        )}

        <DataElement>Viso tvorlenciu: {totalSegments}</DataElement>
        <DataElement>Viso tvorlenciu Alt: {totalSegmentsAlt}</DataElement>
        <DataElement>Viso skersiniu: {totalHorizontals * 2}</DataElement>
        <DataElement>
          Viso skersiniu laikikliu: {totalHorizontals * 4}
        </DataElement>
        <DataElement>Viso vartu stulpu: {totalGateVerticals}</DataElement>
        <DataElement>Viso stulpu: {totalVerticals}</DataElement>
        <DataElement>Viso borteliu: {totalCurbs}</DataElement>
        <DataElement>Viso borteliu laikikliu: {totalCurbs * 2}</DataElement>
        <DataElement>
          Viso savisriegiu: {totalSegments * 4} - {totalSegmentsAlt * 4}
        </DataElement>
      </div>
      <div className="flex flex-col gap-4 ">
        {values?.map((item, index) => (
          <CalculatedData key={index} index={index} data={item} />
        ))}
      </div>
    </div>
  );
}

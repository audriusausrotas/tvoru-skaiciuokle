"use client";

import { useEffect, useState } from "react";
import CalculatedData from "./CalculatedData";
import { useSelector } from "react-redux";

export default function ShowData() {
  const values = useSelector((state) => state.segments.values);

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

  return (
    <div className="flex flex-col flex-1 gap-8 ">
      <div className="flex flex-col gap-4 ">
        {values?.map((item, index) => (
          <CalculatedData key={index} index={index} data={item} />
        ))}
      </div>
      <div>
        <div>Viso tarpu: {values.length}</div>
        <div>Viso kvadratu: {totalM2.toFixed(2)}</div>
        <div>Viso tvorlenciu: {totalSegments}</div>
        <div>Viso tvorlenciu Alt: {totalSegmentsAlt}</div>
      </div>
    </div>
  );
}

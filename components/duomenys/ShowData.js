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
    <div className="flex ">
      <div className="flex flex-col gap-4 min-w-[900px]">
        {values?.map((item, index) => (
          <CalculatedData key={index} index={index} data={item} />
        ))}
      </div>
      <div className="flex flex-col gap-2 text-lg">
        <div className="border-b">Viso segmentu: {values.length}</div>
        <div className="border-b">Viso kvadratu: {totalM2.toFixed(2)}</div>
        <div className="border-b">Viso tvorlenciu: {totalSegments}</div>
        <div className="border-b">Viso tvorlenciu Alt: {totalSegmentsAlt}</div>
        <div className="border-b">Viso skersiniu: {totalHorizontals * 2}</div>
        <div className="border-b">
          Viso skersiniu laikikliu: {totalHorizontals * 4}
        </div>
        <div className="border-b">Viso stulpu: {totalVerticals}</div>
        <div className="border-b">Viso borteliu: {totalCurbs}</div>
        <div className="border-b">
          Viso borteliu laikikliu: {totalCurbs * 2}
        </div>
        <div className="border-b">Viso vartu stulpu: {totalGateVerticals}</div>
        <div className="border-b">
          Viso savisriegiu: {totalSegments * 4} - {totalSegmentsAlt * 4}
        </div>
      </div>
    </div>
  );
}

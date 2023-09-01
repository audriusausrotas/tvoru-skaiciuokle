"use client";

import CalculatedData from "./CalculatedData";
import { useSelector, useDispatch } from "react-redux";
import { calculationsActions } from "@/Components/redux/calculations";
import DataElement from "./DataElement";
import { useEffect } from "react";

export default function ShowData() {
  const values = useSelector((state) => state.segments.values);
  const type = useSelector((state) => state.info.type);

  const segmentai = useSelector((state) => state.calculations.segmentai);
  const m2 = useSelector((state) => state.calculations.m2);
  const m = useSelector((state) => state.calculations.m);
  const tvorlentes = useSelector((state) => state.calculations.tvorlentes);
  const tvorlentesAlt = useSelector(
    (state) => state.calculations.tvorlentesAlt
  );
  const skersiniai = useSelector((state) => state.calculations.skersiniai);
  const skersiniuLaikikliai = useSelector(
    (state) => state.calculations.skersiniuLaikikliai
  );
  const stulpai = useSelector((state) => state.calculations.stulpai);
  const vartuStulpai = useSelector((state) => state.calculations.vartuStulpai);
  const borteliai = useSelector((state) => state.calculations.borteliai);
  const borteliuLaikikliai = useSelector(
    (state) => state.calculations.borteliuLaikikliai
  );
  const kniedes = useSelector((state) => state.calculations.kniedes);
  const kniedesAlt = useSelector((state) => state.calculations.kniedesAlt);
  const kojos = useSelector((state) => state.calculations.kojos);
  const apkaustai = useSelector((state) => state.calculations.apkaustai);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculationsActions.addData(values));
  }, [values]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 text-lg ">
        <div className="flex flex-wrap w-full gap-2 ">
          <DataElement>Segmentų: {segmentai}</DataElement>
          {type !== "Alba" && type !== "Dilė" && (
            <DataElement>Kv.m: {m2}</DataElement>
          )}
          {(type === "Alba" || type === "Dilė") && (
            <DataElement>Metrai: {m}</DataElement>
          )}
        </div>
        <div className="flex flex-wrap gap-2 ">
          <DataElement>Tvorlentės: {tvorlentes}</DataElement>
          <DataElement>Tvorlentės Alt: {tvorlentesAlt}</DataElement>
        </div>
        <div className="flex flex-wrap w-full gap-2 ">
          <DataElement>Skersiniai: {skersiniai}</DataElement>
          <DataElement>Skersinių laikikliai: {skersiniuLaikikliai}</DataElement>
        </div>
        <div className="flex flex-wrap w-full gap-2 ">
          <DataElement>Stulpai: {stulpai}</DataElement>
          <DataElement>Vartų stulpai: {vartuStulpai}</DataElement>
        </div>
        <div className="flex flex-wrap w-full gap-2 ">
          <DataElement>Borteliai: {borteliai}</DataElement>
          <DataElement>Bortelių laikikliai: {borteliuLaikikliai}</DataElement>
        </div>
        <DataElement>
          Savisriegiai: {kniedes} - {kniedesAlt}
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

"use client";

import Input from "../Input";
import Button from "../Button";
import SelectComponent from "../SelectComponent";
import { infoActions } from "@/Components/redux/info";
import { clearAll } from "@/Components/redux/segments";
import { calculationsActions } from "@/Components/redux/calculations";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../Checkbox";

const TYPES = ["Alba", "Dilė", "Daimond"];
const METALS = ["kazkoks", "kazkoks2", "kazkoks3"];
const COLORS = ["7016", "8017", "8019"];
const SIZES = ["60 cm", "40 cm", "11 cm"];

export default function OrderInfo() {
  const client = useSelector((state) => state.info.client);
  const adress = useSelector((state) => state.info.adress);
  const tel = useSelector((state) => state.info.tel);
  const email = useSelector((state) => state.info.email);
  const type = useSelector((state) => state.info.type);
  const metal = useSelector((state) => state.info.metal);
  const color = useSelector((state) => state.info.color);
  const width = useSelector((state) => state.info.width);
  const montavimas = useSelector((state) => state.info.montavimas);
  const vartai = useSelector((state) => state.info.vartai);

  const dispatch = useDispatch();

  function changeHandler(v, parameter) {
    if (parameter === "montavimas") dispatch(infoActions.changeMontavimas(v));
    else if (parameter === "vartai") dispatch(infoActions.changeVartai(v));
  }

  function clear() {
    dispatch(infoActions.clearAll());
    dispatch(clearAll());
    dispatch(calculationsActions.clearAll());
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4 w-fit">
        <div className="flex flex-col gap-1">
          <Input
            placeholder="Klientas"
            value={client}
            type="text"
            setValue={(v) => {
              dispatch(infoActions.addClient(v));
            }}
          />
          <Input
            placeholder="Adresas"
            value={adress}
            type="text"
            setValue={(v) => {
              dispatch(infoActions.addAdress(v));
            }}
          />
          <Input
            placeholder="Telefono Numeris"
            value={tel}
            type="text"
            setValue={(v) => {
              dispatch(infoActions.addTel(v));
            }}
          />
          <Input
            placeholder="Elektroninis paštas"
            value={email}
            type="text"
            setValue={(v) => {
              dispatch(infoActions.addEmail(v));
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <SelectComponent
            data={TYPES}
            value={type}
            setValue={(v) => {
              dispatch(infoActions.addType(v));
            }}
          />
          <SelectComponent
            data={METALS}
            value={metal}
            setValue={(v) => {
              dispatch(infoActions.addMetal(v));
            }}
          />
          <SelectComponent
            data={COLORS}
            value={color}
            setValue={(v) => {
              dispatch(infoActions.addColor(v));
            }}
          />
          <SelectComponent
            data={SIZES}
            value={width}
            setValue={(v) => {
              dispatch(infoActions.addWidth(v));
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex flex-wrap gap-6">
          <Checkbox
            label="Betonavimas"
            checked={montavimas}
            id="montavimas"
            changeHandler={changeHandler}
            name="montavimas"
          />
          <Checkbox
            label="Be Vartų"
            checked={vartai}
            id="vartai"
            changeHandler={changeHandler}
            name="vartai"
          />
        </div>
        <Button onClick={clear}>Clear All</Button>
      </div>
    </div>
  );
}

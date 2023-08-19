"use client";

import Input from "../Input";
import Button from "../Button";
import { infoActions } from "@/Components/redux/info";
import { useSelector, useDispatch } from "react-redux";

export default function OrderInfo() {
  const client = useSelector((state) => state.info.client);
  const adress = useSelector((state) => state.info.adress);
  const tel = useSelector((state) => state.info.tel);
  const email = useSelector((state) => state.info.email);
  const type = useSelector((state) => state.info.type);
  const metal = useSelector((state) => state.info.metal);
  const color = useSelector((state) => state.info.color);
  const width = useSelector((state) => state.info.width);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-4">
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
        <Button
          onClick={() => {
            dispatch(infoActions.clearAll());
          }}
        >
          Clear All
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <Input
          placeholder="Tvoros tipas"
          value={type}
          type="text"
          setValue={(v) => {
            dispatch(infoActions.addType(v));
          }}
        />
        <Input
          placeholder="Skarda"
          value={metal}
          type="text"
          setValue={(v) => {
            dispatch(infoActions.addMetal(v));
          }}
        />
        <Input
          placeholder="Spalva"
          value={color}
          type="text"
          setValue={(v) => {
            dispatch(infoActions.addColor(v));
          }}
        />
        <Input
          placeholder="Profilio plotis cm"
          value={width}
          type="number"
          setValue={(v) => {
            dispatch(infoActions.addWidth(v));
          }}
        />
      </div>
    </div>
  );
}

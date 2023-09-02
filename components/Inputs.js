import Input from "./Input";
import Checkbox from "./Checkbox";

export default function Inputs({
  value,
  setValues,
  index,
  onEnter,
  firstInputRef,
}) {
  function changeHandler(v, parameter) {
    setValues(v, parameter);
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <div className="w-4">{index + 1}</div>
      <Input
        value={value?.ilgis}
        type="number"
        w={true}
        onEnter={onEnter}
        setValue={(v) => {
          changeHandler(v, "ilgis");
        }}
        firstInputRef={firstInputRef}
      />
      <Input
        value={value?.aukstis}
        type="number"
        w={true}
        onEnter={onEnter}
        setValue={(v) => {
          changeHandler(v, "aukstis");
        }}
      />
      <Input
        value={value?.wantedSpace}
        type="number"
        w={true}
        onEnter={onEnter}
        def={2}
        setValue={(v) => {
          changeHandler(v, "tarpas");
        }}
      />
      <Checkbox
        label="Dvipusė"
        checked={value.double}
        id={`dvipuse${index}`}
        changeHandler={changeHandler}
        name="double"
      />
      <Checkbox
        label="Vartai"
        checked={value.gates}
        id={`gates${index}`}
        changeHandler={changeHandler}
        name="gates"
      />
    </div>
  );
}

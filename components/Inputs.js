import Input from "./Input";

export default function Inputs({ value, setValues }) {
  function changeHandler(v, parameter) {
    setValues(v, parameter);
  }

  return (
    <div className="flex gap-4">
      <Input
        placeholder="ilgis metrais"
        value={value?.ilgis}
        setValue={(v) => {
          changeHandler(v, "ilgis");
        }}
      />
      <Input
        placeholder="aukstis metrais"
        value={value?.aukstis}
        setValue={(v) => {
          changeHandler(v, "aukstis");
        }}
      />
    </div>
  );
}

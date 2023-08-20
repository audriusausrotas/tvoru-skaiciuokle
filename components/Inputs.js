import Input from "./Input";

export default function Inputs({ value, setValues, index }) {
  function changeHandler(v, parameter) {
    setValues(v, parameter);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="w-4">{index + 1}</div>
      <Input
        placeholder="ilgis m"
        value={value?.ilgis}
        type="number"
        short={true}
        setValue={(v) => {
          changeHandler(v, "ilgis");
        }}
      />
      <Input
        placeholder="aukstis m"
        value={value?.aukstis}
        type="number"
        short={true}
        setValue={(v) => {
          changeHandler(v, "aukstis");
        }}
      />
      <Input
        placeholder="Tarpas cm"
        value={value?.wantedSpace}
        type="number"
        short={true}
        setValue={(v) => {
          changeHandler(v, "tarpas");
        }}
      />
      <div className="flex gap-2">
        <label htmlFor={`dvipuse${index}`} className="select-none">
          Dvipuse
        </label>
        <input
          type="checkbox"
          checked={value?.double}
          id={`dvipuse${index}`}
          className="w-5"
          onChange={(e) => {
            changeHandler(e.target.checked, "double");
          }}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor={`gates${index}`} className="select-none">
          vartai
        </label>
        <input
          type="checkbox"
          checked={value?.gates}
          id={`gates${index}`}
          className="w-5"
          onChange={(e) => {
            changeHandler(e.target.checked, "gates");
          }}
        />
      </div>
    </div>
  );
}

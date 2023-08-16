export default function Input({ placeholder, value, setValue }) {
  function changeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <input
      className="border border-black "
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}

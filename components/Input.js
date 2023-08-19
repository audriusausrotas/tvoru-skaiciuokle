export default function Input({ placeholder, value, setValue, type, short }) {
  function changeHandler(e) {
    setValue(e.target.value);
  }

  return (
    <input
      className={`px-4 py-1 border border-black ${short ? "w-28" : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
    />
  );
}

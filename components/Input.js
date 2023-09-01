export default function Input({
  placeholder,
  value,
  setValue,
  type,
  w,
  onEnter,
  firstInputRef,
}) {
  function changeHandler(e) {
    setValue(e.target.value);
  }

  function enterHandler(e) {
    if (e.key === "Enter") onEnter();
  }

  return (
    <input
      className={`px-4 py-1 border border-black rounded-sm ${w ? "w-20" : ""}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      ref={firstInputRef}
      onKeyDown={enterHandler}
    />
  );
}

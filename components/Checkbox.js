import React from "react";

export default function Checkbox({ checked, id, changeHandler, name, label }) {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} className="select-none">
        {label}
      </label>
      <input
        type="checkbox"
        checked={checked}
        id={id}
        className="w-5"
        onChange={(e) => {
          changeHandler(e.target.checked, name);
        }}
      />
    </div>
  );
}

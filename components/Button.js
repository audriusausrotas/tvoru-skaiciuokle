import React from "react";

export default function Button({ onClick, children }) {
  return (
    <button
      className="w-64 p-2 text-white rounded-md bg-slate-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

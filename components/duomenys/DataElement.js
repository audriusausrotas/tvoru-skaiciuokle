import React from "react";

export default function DataElement({ children }) {
  return (
    <div className="flex flex-1 w-full px-4 py-1 border rounded-sm  min-w-[15rem]">
      {children}
    </div>
  );
}

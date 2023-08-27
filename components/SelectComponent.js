"use client";

import React, { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { BiSolidChevronUp } from "react-icons/bi";

export default function SelectComponent({ data, value, setValue }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex items-center justify-between w-64 px-4 py-1 border border-black select-none hover:cursor-pointer"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <p>{value ? value : data[0]}</p>
      {open ? <BiSolidChevronUp /> : <BiSolidChevronDown />}
      {open && (
        <div className="absolute left-0 flex flex-col w-64 overflow-hidden border border-black rounded-b-md top-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="px-4 py-0.5 bg-white border-b last:border-none border-black hover:bg-slate-200 z-10"
              onClick={() => {
                setValue(item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

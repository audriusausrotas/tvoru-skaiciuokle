import { useSelector } from "react-redux";

export default function CalculatedData({ index, data }) {
  const type = useSelector((state) => state.info.type);

  if (data.ilgis)
    return (
      <div className="flex items-center gap-1 pb-4 border-b w-fit">
        <div className="w-12 pr-2 text-4xl font-bold text-right">
          {index + 1}
        </div>
        {type !== "Alba" && type !== "Dilė" && (
          <div className="flex items-center justify-center h-full px-4 border border-black">
            kvadratai: {data.m2}
          </div>
        )}
        {(type === "Alba" || type === "Dilė") && (
          <div className="flex flex-wrap gap-2">
            <div className="flex flex-col">
              <div className="px-4 py-1 border border-b-0 border-black ">
                tvorlenciu skaicius: {data.segments}
              </div>
              <div className="px-4 py-1 border border-black ">
                tvorlenciu tarpas: {data.space}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="px-4 py-1 border border-b-0 border-black ">
                Alternatyvus tvorlenciu skaicius: {data.segmentsAlt}
              </div>
              <div className="px-4 py-1 border border-black">
                Alternatyvus tvorlenciu tarpas: {data.spaceAlt}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

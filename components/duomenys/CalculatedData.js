export default function CalculatedData({ index, data }) {
  if (data.ilgis)
    return (
      <div className="flex items-center gap-1 pb-4 border-b w-fit">
        <div className="w-8 ">{index + 1}</div>
        <div className="flex items-center justify-center w-40 h-full border border-black">
          kvadratai: {data.m2}
        </div>
        <div>
          <div className="px-4 py-1 border border-b-0 border-black w-80">
            tvorlenciu skaicius: {data.segments}
          </div>
          <div className="px-4 py-1 border border-black w-80">
            tarpas tarp tvorlenciu: {data.space}
          </div>
        </div>
        <div>
          <div className="px-4 py-1 border border-black border-b-0  w-[350px]">
            Alternatyvus tvorlenciu skaicius: {data.segmentsAlt}
          </div>
          <div className="border border-black px-4 w-[350px] py-1">
            Alternatyvus tarpas tarp tvorlenciu: {data.spaceAlt}
          </div>
        </div>
      </div>
    );
}

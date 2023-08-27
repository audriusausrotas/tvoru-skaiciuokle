import ShowData from "../components/duomenys/ShowData";
import Measurements from "../components/skaiciuokle/Measurements";
import OrderInfo from "../components/skaiciuokle/OrderInfo";

export default function Home() {
  return (
    <div className="flex gap-20 p-10">
      <div className="flex flex-col min-w-[30%] max-w-4xl  gap-10">
        <OrderInfo />
        <ShowData />
      </div>
      <Measurements />
    </div>
  );
}

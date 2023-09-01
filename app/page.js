import ShowData from "../components/duomenys/ShowData";
import Measurements from "../components/skaiciuokle/Measurements";
import OrderInfo from "../components/skaiciuokle/OrderInfo";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-20 p-10">
      <div className="flex flex-col gap-10">
        <OrderInfo />
        <Measurements />
      </div>
      <div className="flex flex-col">
        <ShowData />
      </div>
    </div>
  );
}

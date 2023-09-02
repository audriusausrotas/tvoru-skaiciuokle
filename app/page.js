import ShowData from "../components/duomenys/ShowData";
import Measurements from "../components/skaiciuokle/Measurements";
import OrderInfo from "../components/skaiciuokle/OrderInfo";
// import { google } from "googleapis";
// const credentials = require("../public/modernitvora-69b0ff5b79ee.json");

export default function Home() {
  // const sheets = google.sheets("v4");
  // const sheetsAuth = new google.auth.GoogleAuth({
  //   credentials,
  //   scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  // });

  // const fetchData = async () => {
  //   try {
  //     const authClient = await sheetsAuth.getClient();

  //     const response = await sheets.spreadsheets.values.get({
  //       spreadsheetId: "1G4WOIgkosYh5fWVpn0of277D2W8EK2-WGay6cIExaaM",
  //       range: "Data",
  //       auth: authClient,
  //     });

  //     const data = response.data.values;

  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data from Google Sheet:", error);
  //   }
  // };

  // fetchData();

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

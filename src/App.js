import "./App.css";
import TopButton from "./component/TopButton";
import Inputs from "./component/Inputs";
import "./index.css";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shodow-xl shadow-grey-400">
      <TopButton />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" />
    </div>
  );
}

export default App;

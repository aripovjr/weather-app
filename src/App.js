import "./App.css";
import TopButton from "./component/TopButton";
import Inputs from "./component/Inputs";
import "./index.css";
import TimeAndLocation from "./component/TimeAndLocation";
import TemperatureAndDetails from "./component/TemperatureAndDetails";
import Forecast from "./component/Forecast";
import getFormattedWeatherData from "./Service/WeatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
      console.log(data);
    };

    fetchWeather();
  }, [query, units]);

  console.log(weather);
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shodow-xl shadow-grey-400">
      <TopButton />
      <Inputs />
      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="hourly forecast" />
          <Forecast title="daily forecast" />
        </>
      )}
    </div>
  );
}

export default App;

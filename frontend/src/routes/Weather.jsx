import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import "../App.css";

function Weather() {
  const [jakarta, setJakarta] = useState(null);
  const [sydney, setSydney] = useState(null);
  const [loadingJakarta, setLoadingJakarta] = useState(true);
  const [loadingSydney, setLoadingSydney] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/weather/jakarta")
      .then((res) => res.json())
      .then((data) => setJakarta(data))
      .finally(() => setLoadingJakarta(false));

    fetch("http://localhost:5000/api/weather/sydney")
      .then((res) => res.json())
      .then((data) => setSydney(data))
      .finally(() => setLoadingSydney(false));
  }, []);

  return (
    <div className="home-container">
      <h2>Weather</h2>
      <ul className="notes-list">
        <li>
          <WeatherCard city="Jakarta" data={jakarta} loading={loadingJakarta} />
        </li>
        <li>
          <WeatherCard city="Sydney" data={sydney} loading={loadingSydney} />
        </li>
      </ul>
    </div>
  );
}

export default Weather;
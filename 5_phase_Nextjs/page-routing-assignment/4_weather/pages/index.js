import { useState } from "react";
const API_BASE_URL =
  "https://api.met.no/weatherapi/locationforecast/2.0/compact";

export default function Home() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [forecastData, setForecastData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = `${API_BASE_URL}?lat=${lat}&lon=${lon}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setForecastData(data.properties.timeseries.slice(0, 30));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="root">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Latitude:
            <input
              className="latitude"
              type="text"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </label>
          <label>
            Longitude:
            <input
              className="longitude"
              type="text"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
            />
          </label>
          <button type="submit">Get Forecast</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecastData.map((forecast) => (
              <tr key={forecast.time}>
                <td>{new Date(forecast.time).toLocaleString()}</td>
                <td>
                  {forecast.data.instant.details.air_temperature.toFixed(1)}
                </td>
                <td>{forecast.data.next_1_hours.summary.symbol_code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

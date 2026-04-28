import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { getWeatherByCity, getWeatherByCoords } from "./services/api";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric"); // metric = °C

  const handleSearch = async (city) => {
    if (!city) return;

    setLoading(true);
    setError("");

    const data = await getWeatherByCity(city, unit);

    if (data.cod !== 200) {
      setError("City not found ❌");
      setWeather(null);
    } else {
      setWeather(data);
    }

    setLoading(false);
  };

  const getLocationWeather = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const data = await getWeatherByCoords(
        pos.coords.latitude,
        pos.coords.longitude,
        unit
      );
      setWeather(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getLocationWeather();
  }, [unit]);

  return (
    <div className={`app ${weather?.weather[0]?.main?.toLowerCase()}`}>
      <h1>🌍 Smart Weather Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="controls">
        <button onClick={getLocationWeather}>📍 My Location</button>

        <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
          🌡 {unit === "metric" ? "°C" : "°F"}
        </button>
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <WeatherCard data={weather} unit={unit} />
    </div>
  );
}

export default App;
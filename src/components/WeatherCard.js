function WeatherCard({ data, unit }) {
  if (!data || !data.main) return null;

  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="card">
      <h2>{data.name}</h2>

      <img src={iconUrl} alt="weather icon" />

      <h1>
        {data.main.temp}°{unit === "metric" ? "C" : "F"}
      </h1>

      <p>{data.weather[0].main}</p>

      <div className="grid">
        <p>💧 {data.main.humidity}%</p>
        <p>🌬 {data.wind.speed}</p>
        <p>🌡 Feels: {data.main.feels_like}</p>
        <p>ضغط {data.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
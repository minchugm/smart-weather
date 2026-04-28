const API_KEY = "44528a8952b480a79b685e8d44eb9b4b";

export const getWeatherByCity = async (city, unit = "metric") => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  return res.json();
};

export const getWeatherByCoords = async (lat, lon, unit = "metric") => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );
  return res.json();
};

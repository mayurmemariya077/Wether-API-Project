

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const cityName = document.getElementById("cityName").value.trim();

  const container = document.getElementById("container");
  const errorText = document.getElementById("error");

  container.innerHTML = "";
  errorText.textContent = "";

  if (cityName === "") {
    errorText.textContent = "Please enter a city name.";
    return;
  }

  try {
    const cityRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
    );

    if (!cityRes.ok) {
      throw new Error("Failed to find city.");
    }

    const cityData = await cityRes.json();

    if (!cityData.results || cityData.results.length === 0) {
      throw new Error("City not found.");
    }

    const city = cityData.results[0];

    const latitude = city.latitude;
    const longitude = city.longitude;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
    );

    if (!weatherRes.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const weatherData = await weatherRes.json();

    if (!weatherData.current) {
      throw new Error("Weather data not available.");
    }

    const current = weatherData.current;

    container.innerHTML = `
      <h1>${city.name}</h1>
      <h2>${current.temperature_2m}°C</h2>
      <p>Humidity: ${current.relative_humidity_2m}%</p>
      <p>Wind Speed: ${current.wind_speed_10m} km/h</p>
    `;
  } catch (error) {
    errorText.textContent = error.message;
  }
});
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'c46571a9b6587d123d531b982050aa75'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (data.cod === 200) {
        document.getElementById("cityName").innerText = `🌍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `🌡️ Temp: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `🌥️ Description: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `💨 Wind: ${data.wind.speed} km/h`;
      } else {
        alert("City not found!");
      }
    } catch (err) {
      alert("Failed to fetch weather data.");
      console.error(err);
    }
  }
  
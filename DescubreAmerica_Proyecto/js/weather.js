const apiKey = '8d55f0eaa340ec2e7315c4678e0b26f4';
const cities = [
  { name: 'San José', id: 'weather-sanjose' },
  { name: 'Guanacaste', id: 'weather-guanacaste' },
  { name: 'Puntarenas', id: 'weather-puntarenas' }
];

document.addEventListener("DOMContentLoaded", function () {
  cities.forEach(city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name},CR&units=metric&appid=${apiKey}&lang=es`)
      .then(response => response.json())
      .then(data => {
        document.getElementById(city.id).innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.weather[0].description}</p>
          <p>🌡️ ${data.main.temp}°C</p>
          <p>💨 Viento: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        document.getElementById(city.id).innerHTML = `<p>Error cargando clima.</p>`;
        console.error("Weather fetch error:", error);
      });
  });
});
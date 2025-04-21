<<<<<<< HEAD
$(document).ready(function () {
    $('#getWeather').click(function () {
      const city = $('#cityInput').val().trim();
      const apiKey = 'f82497087d902205d7f923a79619d09b';
  
      if (city === '') {
        $('#weatherResult').html('<p>Please enter a city name.</p>');
        return;
      }
  
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        type: 'GET',
        success: function (data) {
          const icon = data.weather[0].icon;
          const html = `
            <div class="weather-card">
              <h2>${data.name}, ${data.sys.country}</h2>
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
              <p>🌡️ <strong>${data.main.temp}°C</strong></p>
              <p>🌥️ ${data.weather[0].description}</p>
              <p>💨 Wind: ${data.wind.speed} m/s</p>
            </div>
          `;
          $('#weatherResult').html(html);
        },
        error: function () {
          $('#weatherResult').html('<p>❌ City not found. Please try again.</p>');
        }
      });
    });
  });
=======
$(document).ready(function () {
    $('#getWeather').click(function () {
      const city = $('#cityInput').val().trim();
      const apiKey = 'f82497087d902205d7f923a79619d09b';
  
      if (city === '') {
        $('#weatherResult').html('<p>Please enter a city name.</p>');
        return;
      }
  
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        type: 'GET',
        success: function (data) {
          const icon = data.weather[0].icon;
          const html = `
            <div class="weather-card">
              <h2>${data.name}, ${data.sys.country}</h2>
              <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
              <p>🌡️ <strong>${data.main.temp}°C</strong></p>
              <p>🌥️ ${data.weather[0].description}</p>
              <p>💨 Wind: ${data.wind.speed} m/s</p>
            </div>
          `;
          $('#weatherResult').html(html);
        },
        error: function () {
          $('#weatherResult').html('<p>❌ City not found. Please try again.</p>');
        }
      });
    });
  });
>>>>>>> 57c30697949bca575ce2955b91607ede539662cf
  
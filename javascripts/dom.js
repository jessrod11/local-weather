const weatherDiv = $('#weather');

const domString = (weatherArray) => {
  let weatherString = '';
  weatherArray.forEach((weather) => {
    weatherString += `<div class="col-sm-6 col-md-4">`;
    weatherString += `<div class="thumbnail">`;
    // weatherString += ` <img src="..." alt="...">`;
    weatherString += `<div class="caption">`;
    weatherString += `<h1>City Name: ${weather.name}</h1>`;
    weatherString += `<h2>Temperature: ${weather.temp}</h2>`;
    weatherString += `<h2>Description: ${weather.description}</h2>`;
    weatherString += `<h3>Pressure: ${weather.pressure}</h3>`;
    weatherString += `<h3>Humidity: ${weather.humidity}</h3>`;
    weatherString += `<h3>Humidity: ${weather.wind_speed}</h3>`;
    // weatherString += `<p>${weather.overview}</p>`;
    weatherString += `<p><a href="#" class="btn btn-primary" role="button">Current Day</a> <a href="#" class="btn btn-default" role="button">5 Day Forecast</a></p>`;
    weatherString += `</div>`;
    weatherString += `</div>`;
    weatherString += `</div>`;
  });
  printToDom(weatherString);
};

const printToDom = (stringz) => {
  weatherDiv.html(stringz);
};

module.exports = {
  domString,
};

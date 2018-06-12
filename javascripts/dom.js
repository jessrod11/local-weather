const momentJS = require('../lib/node_modules/moment/min/moment.min.js');

const singleWeatherDom = (singleWeather) => {
  let singleString = '';
  singleString += `<div class="jumbotron weather">`;
  singleString +=   `<h1>City Name: ${singleWeather.name}</h1>`;
  singleString +=   `<h2 class="date-time">${momentJS().format('ll')}</h2>`;
  singleString += `<h2>Temperature: ${singleWeather.main.temp}&deg;F</h2>`;
  singleString += `<img class="icon" src="https://openweathermap.org/img/w/${singleWeather.weather[0].icon}.png" alt="image of weather">`;
  singleString +=   `<h2>Description: ${singleWeather.weather[0].description}</h2>`;
  singleString +=   `<h3> Air Pressure: ${singleWeather.main.pressure}</h3>`;
  singleString +=   `<h3>Wind Speed: ${singleWeather.wind.speed}mph</h3>`;
  singleString +=   `<p><a id="fivedayBtn" class="btn btn-primary btn-lg" role="button">5 Day Forecast</a></p>`;
  singleString += `</div>`;
  printToDom('#jumboWeather', singleString);
};

const domString = (weatherArray) => {
  let weatherString = '';
  weatherString += `<h1>City Name: ${weatherArray.city.name}</h1>`;
  weatherArray.list.forEach((weather, i) => {
    if (i % 8 === 0) {
      weatherString += `<div class="col-sm-6 col-md-4 text-center weather">`;
      weatherString +=  `<div class="thumbnail">`;
      weatherString +=    `<div class="caption">`;
      weatherString +=      `<h2 class="date-time">${momentJS(weather.dt_txt).format('ll')}</h2>`;
      weatherString += `<h2 class="temperature">Temperature: ${weather.main.temp}&deg;F</h2>`;
      weatherString +=         `<img class="icon" src="https://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="image of weather">`;
      weatherString +=         `<h2 class="description">Description: ${weather.weather[0].description}</h2>`;
      weatherString +=          `<h3 class="pressure"> Air Pressure: ${weather.main.pressure}</h3>`;
      weatherString +=          `<h3 class="wind">Wind Speed: ${weather.wind.speed}mph</h3>`;
      weatherString +=          `<p><a class="btn btn-primary btn-lg currentdayBtns" role="button">Current</a><a class="btn btn-warning btn-lg addWeatherToSaved" role="button">Save</a></p>`;
      weatherString +=   `</div>`;
      weatherString +=  `</div>`;
      weatherString += `</div>`;
    };
  });
  printToDom('#weather', weatherString);
};

const savedDomString = (weatherArray) => {
  let weatherString = '';
  weatherArray.forEach((weather) => {
    weatherString += `<div class="col-sm-6 col-md-4 text-center stix">`;
    weatherString += `<div class="thumbnail weather ${weather.isScarry ? 'scary' : ''}" data-firebase-id="${weather.id}">`;
    weatherString +=    `<div class="caption">`;
    weatherString +=      `<h2 class="temperature"> ${weather.temperature}</h2>`;
    weatherString +=      `<h2 class="description">${weather.condition}</h2>`;
    weatherString +=      `<h3 class="pressure">${weather.pressure}</h3>`;
    weatherString +=      `<h3 class="wind">${weather.wind}</h3>`;
    weatherString +=      `<p><a class="btn btn-danger deleteWeatherFromCollectionEvent" role="button">Delete</a><a class="btn btn-warning updateWeatherToScarryEvent" role="button">Scared?</a></p>`;
    weatherString +=      `</div>`;
    weatherString +=    `</div>`;
    weatherString += `</div>`;
  });
  printToDom('#savedWeather', weatherString);
};

const printToDom = (id, string) => {
  $(id).html(string);
};

module.exports = {
  domString,
  singleWeatherDom,
  savedDomString,
};

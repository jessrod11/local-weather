const weatherDiv = $('#weather');
const singleWeatherDiv = $('#jumboWeather');

const domString = (weatherArray) => {
  let weatherString = '';
  // weatherArray.forEach((weather) => {
  weatherString += `<div class="col-sm-6 col-md-4">`;
  weatherString += `<div class="thumbnail">`;
  weatherString += `<div class="caption">`;
  weatherString += `<h1>City Name: ${weatherArray.name}</h1>`;
  weatherString += `<h2>Temperature: ${weatherArray.main.temp}</h2>`;
  weatherString += `<h2>Description: ${weatherArray.weather[0].description}</h2>`;
  weatherString += `<h3> Air Pressure: ${weatherArray.main.pressure}</h3>`;
  weatherString += `<h3>Wind Speed: ${weatherArray.wind.speed}</h3>`;
  weatherString += `<p><a href="#" class="btn btn-primary" role="button">Current Day</a> <a href="#" class="btn btn-default" role="button">5 Day Forecast</a></p>`;
  weatherString += `</div>`;
  weatherString += `</div>`;
  weatherString += `</div>`;
  printToDom(weatherString);
};

const singleWeatherDom = (singleWeather) => {
  let singleString = '';
  singleString += `<div class="jumbotron">`;
  singleString += `<h1>City Name: ${singleWeather.name}</h1>`;
  singleString += `<h2>Temperature: ${singleWeather.main.temp}</h2>`;
  singleString += `<h2>Description: ${singleWeather.weather[0].description}</h2>`;
  singleString += `<h3> Air Pressure: ${singleWeather.main.pressure}</h3>`;
  singleString += `<h3>Wind Speed: ${singleWeather.wind.speed}</h3>`;
  singleString += `<p><a id="five-dayBtn" class="btn btn-primary btn-lg" href="#" role="button">5 Day Forecast</a></p>`;
  singleString += `</div>`;
  newPrintToDom(singleString);
};

const printToDom = (stringz) => {
  weatherDiv.html(stringz);
};

const newPrintToDom = (stringz) => {
  singleWeatherDiv.html(stringz);
};

module.exports = {
  domString,
  singleWeatherDom,
};

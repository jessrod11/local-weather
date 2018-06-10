const weatherDiv = $('#weather');
const singleWeatherDiv = $('#jumboWeather');

const singleWeatherDom = (singleWeather) => {
  let singleString = '';
  singleString += `<div class="jumbotron">`;
  singleString += `<h1>City Name: ${singleWeather.name}</h1>`;
  singleString += `<img src="https://openweathermap.org/img/w/${singleWeather.weather[0].icon}.png" alt="image of weather">`;
  singleString += `<h2>Temperature: ${singleWeather.main.temp}</h2>`;
  singleString += `<h2>Description: ${singleWeather.weather[0].description}</h2>`;
  singleString += `<h3> Air Pressure: ${singleWeather.main.pressure}</h3>`;
  singleString += `<h3>Wind Speed: ${singleWeather.wind.speed}</h3>`;
  singleString += `<p><a id="fivedayBtn" class="btn btn-primary btn-lg" role="button">5 Day Forecast</a></p>`;
  singleString += `</div>`;
  newPrintToDom(singleString);
};

const domString = (weatherArray) => {
  let weatherString = '';
  weatherString += `<h1>City Name: ${weatherArray.city.name}</h1>`;
  weatherArray.list.forEach((weather, i) => {
    if (i % 8 === 0) {
      weatherString += `<div class="col-sm-6 col-md-4 text-center weather">`;
      weatherString += `<div class="thumbnail">`;
      weatherString += `<div class="caption">`;
      weatherString += `<h2>Temperature: ${weather.main.temp}</h2>`;
      weatherString += `<h2>Description: ${weather.weather[0].description}</h2>`;
      weatherString += `<h3> Air Pressure: ${weather.main.pressure}</h3>`;
      weatherString += `<h3>Wind Speed: ${weather.wind.speed}</h3>`;
      weatherString += `<p><a class="btn btn-primary btn-lg currentdayBtns" role="button">Current Day</a></p>`;
      weatherString += `<p><a class="btn btn-warning btn-lg addWeatherToSaved" role="button">Save</a></p>`;
      weatherString += `</div>`;
      weatherString += `</div>`;
      weatherString += `</div>`;
    };
  });
  printToDom(weatherString);
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

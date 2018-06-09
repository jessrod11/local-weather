/* eslint camelcase: 0 */
const dom  = require('./dom');

let weatherKey =  '';

const setKey = (key) => {
  weatherKey = key;
};

const currentWeather = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${txt},us&appid=${weatherKey}&units=imperial`)
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showCurrentWeatherResults = (searchText) => {
  currentWeather(searchText)
    .then((results) => {
      dom.singleWeatherDom(results);
    })
    .catch((err) => {
      console.error('error in show weather results', err);
    });
};

const fiveDayForecast = (txt) => {
  return new Promise ((resolve , reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${txt},us&appid=${weatherKey}&units=imperial`)
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showFiveDayResults = (searchTxt) => {
  fiveDayForecast(searchTxt)
    .then((results) => {
      dom.domString(results);
    })
    .catch((err) => {
      console.error('error in five day results', err);
    });
};

module.exports = {
  setKey,
  showCurrentWeatherResults,
  showFiveDayResults,
};

/* eslint camelcase: 0 */

const dom  = require('./dom');

let weatherKey =  '';

const setKey = (key) => {
  weatherKey = key;
};

const grabWeather = (txt) => {
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

const showWeatherResults = (searchText) => {
  grabWeather(searchText)
    .then((results) => {
      dom.singleWeatherDom(results);
    })
    .catch((err) => {
      console.error('error in show weather results', err);
    });
};

module.exports = {
  setKey,
  showWeatherResults,
};

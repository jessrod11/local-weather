const dom  = require('./dom');

let weatherKey =  '';

const setKey = (key) => {
  weatherKey = key;
};

const grabWeather = (zipcode) => {
  return new Promise((resolve, reject) => {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},us&appid=${weatherKey}&units=imperial`)
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const showWeatherResults = () => {
  grabWeather()
    .then((results) => {
      dom.domString(results);
    })
    .catch((err) => {
      console.error('error in show weather results', err);
    });
};

module.exports = {
  showWeatherResults,
  setKey,
};

/* eslint camelcase: 0 */

const dom  = require('./dom');

// let weatherKey =  '';

// const setKey = (key) => {
//   weatherKey = key;
// };

// const grabWeather = () => {
//   return new Promise((resolve, reject) => {
//     $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=37211,us&appid=${weatherKey}&units=imperial`)
//       .done((data) => {
//         resolve(data);
//       })
//       .fail((err) => {
//         reject(err);
//       });
//   });
// };

// const showWeatherResults = () => {
//   grabWeather()
//     .then((results) => {
//       dom.domString(results);
//     })
//     .catch((err) => {
//       console.error('error in show weather results', err);
//     });
// };

const singleNashWeather =  {
  name: 'Nashville',
  description: 'scattered clouds',
  temp: 87.35,
  pressure: 1013,
  humidity: 62,
  wind_speed: 11.41,
};

const showSingleWeather = () => {
  dom.singleWeatherDom([singleNashWeather,]);
};

const showWeatherResults = () => {
  dom.domString([singleNashWeather, singleNashWeather, singleNashWeather, singleNashWeather,]);
};

module.exports = {
  showSingleWeather,
  showWeatherResults,
  // setKey,
};

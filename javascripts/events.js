const weather = require ('./weather');

// const buttonEvent = () => {
//   $('#search-button').on('click', (e) => {
//     weather.showSingleWeather();

//   });
// };

const searchEvent = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      weather.showWeatherResults('37025');
    }
  });
};

const navEvents = () => {
  // buttonEvent();
  searchEvent();
};

module.exports = navEvents;

const weather = require ('./weather');

const buttonEvent = () => {
  $('#search-button').on('click', (e) => {
    weather.showSingleWeather();

  });
};

const searchEvent = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      weather.showWeatherResults();
    }
  });
};

const navEvents = () => {
  buttonEvent();
  searchEvent();
};

module.exports = navEvents;

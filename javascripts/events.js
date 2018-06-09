const weather = require ('./weather');

const buttonEvent = () => {
  $('#search-button').on('click', () => {
    const zipcode = $('#input-field').val();
    weather.showCurrentWeatherResults(zipcode);
  });
};

const fiveDayBtn = () => {
  $(document).on('click', '#fivedayBtn', (e) => {
    const zipcode = $('#input-field').val();
    weather.showFiveDayResults(zipcode);
  });
};

const searchEvent = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const zipcode = $('#input-field').val();
      weather.showCurrentWeatherResults(zipcode);
    }
  });
};

const currentDayBtn = () => {
  $(document).on('click', '.currentdayBtns', (e) => {
    $('#weather').addClass('hide');
  });
};

const navEvents = () => {
  buttonEvent();
  fiveDayBtn();
  searchEvent();
  currentDayBtn();
};

module.exports = {
  navEvents,
};

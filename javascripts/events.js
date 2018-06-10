const weather = require ('./weather');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const homeEvent = () => {
  $(document).on('click', '#weatherHome', (e) => {
    $('#weather').addClass('hide');
    $('#jumboWeather').addClass('hide');
    $('#savedWeather').addClass('hide');
  });
};

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
    $('#jumboWeather').addClass('hide');
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
    $('#jumboWeather').removeClass('hide');
    $('#savedWeather').addClass('hide');
  });
};

const savedForecastBtn = () => {
  $(document).on('click','#saved-button', (e) => {
    $('#weather').addClass('hide');
    $('#jumboWeather').addClass('hide');
    $('#savedWeather').removeClass('hide');
    grabSavedWeatherEvent();
  });
};

const saveWeatherEvent = () => {
  $(document).on('click', '.addWeatherToSaved' , (e) => {
    const weatherToAddCard = $(e.target).closest('.weather');
    const weatherToAdd = {
      temperature: weatherToAddCard.find('.temperature').text(),
      condition: weatherToAddCard.find('.description').text(),
      pressure: weatherToAddCard.find('.pressure').text(),
      wind: weatherToAddCard.find('.wind').text(),
      isScarry: true,
    };
    firebaseApi.saveWeather(weatherToAdd);
  });
};

const grabSavedWeatherEvent = () => {
  firebaseApi.grabSavedWeather()
    .then((moviesArray) => {
      dom.savedDomString(moviesArray);
    })
    .catch((error) => {
      console.error('error in grabSavedWeather', error);
    });
};

const navEvents = () => {
  homeEvent();
  buttonEvent();
  fiveDayBtn();
  searchEvent();
  currentDayBtn();
  saveWeatherEvent();
  savedForecastBtn();
};

module.exports = {
  navEvents,
};

const weather = require ('./weather');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const homeEvent = () => {
  $(document).on('click', '#weatherHome', (e) => {
    $('#weather').addClass('hide');
    $('#jumboWeather').addClass('hide');
    $('#savedWeather').addClass('hide');
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });
};

const buttonEvent = () => {
  $('#search-button').on('click', () => {
    const zipcode = $('#input-field').val() ;
    $('#jumboWeather').removeClass('hide');
    weather.showCurrentWeatherResults(zipcode);
    $('.signIn').addClass('hide');
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
      $('#jumboWeather').removeClass('hide');
      weather.showCurrentWeatherResults(zipcode);
      $('.signIn').addClass('hide');
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
    $('.signIn').addClass('hide');
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
      isScarry: false,
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

const deleteWeatherEvent = () => {
  $(document).on('click', '.deleteWeatherFromCollectionEvent', (e) => {
    const weatheroDeleteId = $(e.target).closest('.weather').data('firebaseId');
    firebaseApi.deleteWeatherfromDb(weatheroDeleteId)
      .then(() => {
        grabSavedWeatherEvent();
      })
      .catch((error) => {
        console.error('error in deleteWeatherEvent', error);
      });
  });
};

const updatedWeatherEvent = () => {
  $(document).on('click', '.updateWeatherToScarryEvent', (e) => {
    const weatherToUpdateId = $(e.target).closest('.weather').data('firebaseId');
    const weatherToUpdateCard = $(e.target).closest('.weather');
    const updatedWeather = {
      temperature: weatherToUpdateCard.find('.temperature').text(),
      condition: weatherToUpdateCard.find('.description').text(),
      pressure: weatherToUpdateCard.find('.pressure').text(),
      wind: weatherToUpdateCard.find('.wind').text(),
      isScarry: true,
    };
    firebaseApi.updateWeatherToScarryInDb(updatedWeather, weatherToUpdateId)
      .then(() => {
        grabSavedWeatherEvent();
      })
      .catch((error) => {
        console.error('error in updatedWeatherEvent', error);
      });
  });
};

const authEvents = () => {
  $('#signin-btn').click((e) => {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        $('#signin-error-msg').text(error.message);
        $('#signin-error').removeClass('hide');
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  });

  $('#register-btn').click((e) => {
    e.preventDefault();
    const email = $('#registerEmail').val();
    const password = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        $('#register-error-msg').text(error.message);
        $('#register-error').removeClass('hide');
        console.error(error.message);
      });
  });

  $('#register-link').click(() => {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });

  $('#signin-link').click(() => {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });

  $('#logout-button').click(() => {
    firebase.auth().signOut()
      .then(() => {
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const navEvents = () => {
  authEvents();
  homeEvent();
  buttonEvent();
  fiveDayBtn();
  searchEvent();
  currentDayBtn();
  deleteWeatherEvent();
  updatedWeatherEvent();
  saveWeatherEvent();
  savedForecastBtn();
};

module.exports = {
  navEvents,
  grabSavedWeatherEvent,
};

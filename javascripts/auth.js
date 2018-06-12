const {grabSavedWeatherEvent,} = require('./events');
const {setUID,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUID(user.uid);
      $('#input-field').removeClass('hide');
      $('#search-button').removeClass('hide');
      $('#saved-button').removeClass('hide');
      $('#logout-button').removeClass('hide');
      $('.signIn').addClass('hide');
      $('#savedWeather').addClass('hide');
      grabSavedWeatherEvent();
    } else {
      // No User is signed in.
      $('#input-field').addClass('hide');
      $('#search-button').addClass('hide');
      $('#saved-button').addClass('hide');
      $('#logout-button').addClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};

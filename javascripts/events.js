const weather = require ('./weather');

const buttonEvent = () => {
  $('#search-button').on('click', (e) => {
    // const zipcode = $('#searchBar').val().replace(' ', '%20');
    weather.showWeatherResults('38125');

  });
};

// const searchEvent = () => {
//   $(document).keypress((e) => {
//     if (e.key === 'Enter') {
//       weather.showWeatherResults('38125');
//     }
//   });
// };

const navEvents = () => {
  buttonEvent();
  // searchEvent();
};

module.exports = navEvents;

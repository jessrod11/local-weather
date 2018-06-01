const buttonEvent = () => {
  $('#search-button').on('click', (e) => {
  // console.error ('did i press something?', e);
  });
};

const searchEvent = () => {
  $('input').on('keypress', (e) => {

    // console.error('grasp what I just typed?', e);
  });
};

const navEvents = () => {
  buttonEvent();
  searchEvent();
};

module.exports = navEvents;

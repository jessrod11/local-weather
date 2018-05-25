const buttonEvent = () => {
  $('#search-button').on('click', (e) => {
    console.error('ive been pushed', e);
  });
};

const searchEvent = () => {
  $('input').on('keypress', (e) => {
    console.error('grasp what I just typed?', e);
  });
};

const initializer = () => {
  buttonEvent();
  searchEvent();
};

module.exports = initializer;

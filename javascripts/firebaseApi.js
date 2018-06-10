let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveWeather = (newWeather) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/weather.json`,
      data: JSON.stringify(newWeather),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

module.exports = {
  setConfig,
  saveWeather,
};

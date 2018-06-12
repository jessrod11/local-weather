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

const grabSavedWeather = () => {
  return new Promise ((resolve, reject) => {
    const allWeatherArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/weather.json`,
    })
      .done((allWeatherObj) => {
        if (allWeatherObj !== null) {
          Object.keys(allWeatherObj).forEach((fbKey) => {
            allWeatherObj[fbKey].id = fbKey;
            allWeatherArray.push(allWeatherObj[fbKey]);
          });
        }
        resolve(allWeatherArray);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const deleteWeatherfromDb = (weatherId) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const updateWeatherToScarryInDb = (updatedWeather, weatherId) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/weather/${weatherId}.json`,
      data: JSON.stringify(updatedWeather),
    })
      .done((modifiedWeather) => {
        resolve(modifiedWeather);
      })
      .fail((err) => {
        reject(err);
      });;
  });
};

module.exports = {
  setConfig,
  saveWeather,
  grabSavedWeather,
  deleteWeatherfromDb,
  updateWeatherToScarryInDb,
};

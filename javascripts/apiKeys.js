const weather = require('./weather');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      weather.setKey(results.weather.apiKey);
    })
    .catch((err) => {
      console.error('error while retrieving keys', err);
    });
};

module.exports = retrieveKeys;

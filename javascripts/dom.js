const weatherDiv = $('#weather');

const domString = (weatherArray) => {
  let weatherString = '';
  weatherArray.forEach((weather) => {
    weatherString += `<div class="col-sm-6 col-md-4">`;
    weatherString += `<div class="thumbnail">`;
    weatherString += ` <img src="..." alt="...">`;
    weatherString += `<div class="caption">`;
    weatherString += `<h3>${weather.coord}</h3>`;
    // weatherString += `<p>${weather.overview}</p>`;
    weatherString += `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
    weatherString += `</div>`;
    weatherString += `</div>`;
    weatherString += `</div>`;
  });
  printToDom(weatherString);
};

const printToDom = (stringz) => {
  weatherDiv.append(stringz);
};

module.exports = {
  domString,
};

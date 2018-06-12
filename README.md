# Local Weather App

## Description
 I utilized CRUD (crete, read, update, and delete) operations on the firebase database using the Open Weather API. Jquery, grunt, browserify, and bootstrap were the technologies used to make this application. This Super Mario themed weather app allows you to search for your current weather and five day forecast by searching by zipcode. Firebase's authentication was used to allow a user to register and sign into the application. Once signed in one can save weather, delete weather, and state If a forecast appears scary to them. (The ghost is a pretty cool gif that didn't photograph well in my readme.) One also has the ability to sign out of the application once they are finished.

## Home Page
![Webpage](https://raw.githubusercontent.com/jessrod11/local-weather/master/img/signIn1.png)

## Current Weather
![Webpage](https://raw.githubusercontent.com/jessrod11/local-weather/master/img/currentSearch.png)

## Five Day Forecast
![Webpage](https://raw.githubusercontent.com/jessrod11/local-weather/master/img/fiveSearch.png)

## Saved Weather
![Webpage](https://raw.githubusercontent.com/jessrod11/local-weather/master/img/save.png)

## Scary Forecast
![Webpage](https://raw.githubusercontent.com/jessrod11/local-weather/master/img/scary1.png)


## How to Run
1. Clone down this repo and cd into project.
1. Install http-server plugin via npm
1. In your terminal, ``` hs -p 9999 ```
1. in your browser navigation to: localhoust:9999
1. If you haven't installed http-server, run npm install http-server -g
1. If you haven't installed grunt-browserify locally, run npm install grunt-browserify -g
1. Clone the repo down
1. run cd local-weather/lib
1. run npm install to install dev dependencies
1. run grunt to compile the javascript files
1. run cd .. & http-server to run the application locally

## Contributors
[Jessica Rodgers](https://github.com/jessrod11)

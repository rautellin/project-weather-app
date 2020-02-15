// APIs links
const currentWeatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=1c5c00b108885200d83efb308cec13d8"

// Data storage
const weather = {}

// DOM elements
const currentWeather = document.getElementById('current')


// Fetch data
fetch(currentWeatherAPI)

  .then((response) => {
    return response.json()
  })

  .then((jsonFile) => {
    weather.location = jsonFile.name
    weather.temp = (jsonFile.main.temp / 100).toFixed(1)
    weather.description = jsonFile.weather[0].description

    let sunrise = new Date((jsonFile.sys.sunrise + jsonFile.timezone) * 1000)
    sunriseTime = sunrise.toLocaleTimeString([], { timeStyle: 'short', timeZone: "UTC" })
    weather.sunrise = sunriseTime

    let sunset = new Date((jsonFile.sys.sunset + jsonFile.timezone) * 1000)
    sunsetTime = sunset.toLocaleTimeString([], { timeStyle: 'short', timeZone: "UTC" })
    weather.sunset = sunsetTime

    printWeather()
  })

// Print data onto DOM
const printWeather = () => {
  currentWeather.innerHTML = `
      <div>
          ${weather.location}
          ${weather.temp}
          ${weather.description}
          ${weather.sunrise}
          ${weather.sunset}
      </div>
    `
}


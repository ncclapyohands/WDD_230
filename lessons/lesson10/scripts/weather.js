const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.5234&lon=-122.6762&appid=5f2d35a8c2c686aaf6ac9e9485e9a1c5";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);


    let f= (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector("#current-temp").textContent = f.toFixed(0);

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=45.5234&lon=-122.6762&appid=5f2d35a8c2c686aaf6ac9e9485e9a1c5";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);


    let f= (jsObject.main.temp - 273.15) * 1.8 + 32;
    document.querySelector("#current-temp").textContent = f.toFixed(0);
    
    

    let wind = jsObject.wind.speed;
    document.querySelector("#wind").textContent = wind;

    

    let wind_chill = (jsObject.main.feels_like - 273.15) * 1.8 + 32;
    if (wind > 3 && f <= 50){
    document.querySelector("#wind-chill").textContent = wind_chill.toFixed(0);
    }
    else{
      document.querySelector("#wind-chill").textContent = "N/A";
    }
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();
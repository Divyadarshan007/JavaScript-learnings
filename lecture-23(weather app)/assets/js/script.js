let temperature = document.getElementById("temperature")
let description = document.getElementById("description")
let weatherIcon = document.getElementById("weather-icon")
let input = document.getElementById("input")
const updateWeather = ()=>{
    const KEY = `ddb6a51d5bb16429af1de3e9acc24a6f`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${KEY}`;

    fetch(URL).then((res)=>{
        return res.json();
    }).then((res)=>{
        temperature.innerHTML = res.main.temp
        description.innerHTML = res.weather[0].description
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="">`
        
    })
}
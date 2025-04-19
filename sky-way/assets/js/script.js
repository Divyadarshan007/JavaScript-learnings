let city = document.querySelector('.city');
let cityImg = document.querySelector('.city-img')
let form = document.querySelector("form");
let tempImg = document.querySelector('.temp-img');
let temp = document.querySelector('.temp');
let description = document.querySelector('.description');
let input = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');
form.addEventListener("submit", (e) => {
    e.preventDefault();  
    if(input.value != ''){
        searchWeather();
    }
});
const searchWeather = () => {
    const KEY = '9505fd1df737e20152fbd78cdb289b6a';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${KEY}`;
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if(data.cod == 200){
                city.innerHTML = data.name;
                cityImg.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                tempImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temp.innerText = data.main.temp;
                description.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure;
            }else{
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            input.value = '';
        })
}


const initial = () => {
    input.value = 'surat';
    searchWeather();
}
initial();
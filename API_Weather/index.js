const apiKey = "57714286124cb62c52857771f79d063b";
const APICountry = `https://flagsapi.com/BR/flat/64.png`;

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search');

const cityElement = document.getElementById('city');
const countryElement = document.getElementById('country');
const temperatureElement = document.getElementById('temperatura');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weather-icon');
const umidifyElement = document.getElementById('umidify');
const windElement = document.getElementById('wind');
const weatherData = document.getElementById('weather-data');

//  obter dados da api a partir do nome da cidade
const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const response = await fetch(apiWeatherUrl);
    const data = response.json();

    return data;
}

//  Mostra dados da api
const showWeatherData = async(city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    umidifyElement.innerText = parseInt(data.main.humidity)
    ;
    temperatureElement.innerText = data.main.temp
    ;
    windElement.innerText = data.wind.speed;
    descriptionElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute(
        'src',
        `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );
    countryElement.setAttribute(
        'src',
        `https://flagsapi.com/${data.sys.country}/flat/64.png`
    );

    weatherData.style.display = 'flex';
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city);
})

cityInput.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        const city = e.target.value;

        showWeatherData(city);
    }
})
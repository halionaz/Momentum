const APIkey = "c137c5b4783c30d1997207a8d897dc55";
const weatherList = {
    '01' : ['sunny',`맑음`],
    '02' : ['partly-sunny',`구름 조금`],
    '03' : ['cloud',`구름`],
    '04' : ['cloud',`흐림`],
    '09' : ['rainy',`비`],
    '10' : ['rainy',`폭우`],
    '11' : ['thunderstorm',`뇌우`],
    '13' : ['snow',`눈`],
    '50' : ['skull',`스모그`]
}

const weatherIcon = document.querySelector('#jsWeatherIcon');
const temp = document.querySelector('#jsTemp');
const description = document.querySelector('#jsDescription');
const loc = document.querySelector('#jsLocation');

function getWeather(coords){
    const APIlink = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey}&lang=kr&units=metric`;
    fetch(APIlink)
    .then(response => response.json())
    .then(json=>{
        let iconId = json.weather[0].icon;
        iconId = iconId.substring(0,iconId.length-1);
        temp.innerHTML = `${json.main.temp.toFixed(1)}º`;
        description.innerHTML = weatherList[iconId][1];
        weatherIcon.name = weatherList[iconId][0];
        loc.innerHTML = json.name;
    })
}

function successGet(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const coords = [lat,lon];
    localStorage.setItem('coords',JSON.stringify(coords));
    getWeather(coords);
}

function loadWeather(){
    const curCoords = localStorage.getItem('coords');
    if(curCoords == null){
        navigator.geolocation.getCurrentPosition(successGet,()=>{console.log('fail to load')});
    } else {
        getWeather(JSON.parse(curCoords));
    }
}

loadWeather();
const apiKey='5242dd4684d876220d3c7bc48cec1cd2';
const apiUrl='https://api.openweathermap.org/data/2.5/weather';

const locationinput=document.getElementById('locationinput');
const searchbutton=document.getElementById('searchbutton');
const locationElement=document.getElementById('location');
const temperatureElement=document.getElementById('temperature');
const descriptionElement=document.getElementById('description');

searchbutton.addEventListener('click',()=>{
    const location=locationinput.value;
    if(location){
        fetchWeather(location);
    }
});
function fetchWeather(location){
    const url=`${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        locationElement.textContent = data.name;
        temperatureElement.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
        descriptionElement.textContent=data.weather[0].description;
    })
    .catch(error => {
        alert('Error fetching weather data',error);
    });
}

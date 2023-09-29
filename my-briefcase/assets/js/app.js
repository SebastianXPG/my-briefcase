function fetchWeather() {
    const apiKey = '2614230cf6ec91e4e5fe65a51974fd3c';
    const queriedCity = document.querySelector('#city').value;

    if(queriedCity === ''){
        alert('Por favor ingrese una ciudad');
        return
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queriedCity}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data) //Esto nos deja ver toda la informacion que quermeos extraer
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const icon = data.weather[0].icon;
            const description = data.weather[0].description;
            
            document.querySelector('#weatherInfo').innerHTML = 
            `<p class = "temp" >the temperature is ${temperature}°C</p>
            <p class = "temp" >the wind speed is ${windSpeed} m/s</p>
            <p class = "temp" >${description} </p>
            <p class = "temp" >it feels like ${feelsLike}°C </p>
            <p class = "temp" >humidity is ${humidity}g/m³ </p>
            <img class = "icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="icono del clima" > 
            `
            ;

        })
}
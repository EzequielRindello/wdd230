// footer current date 
const options = {
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;


// movile menu de hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // cada vez que pasa un addEventListener() cambia el i
        menuIcon.querySelector("i").classList.toggle("bi-list");
        menuIcon.querySelector("i").classList.toggle("bi-x");
    });
});

// weather forecast and info
const apiKey = "942cb3e734cbba69ea8a179cac8e553d";
const encodedCity = encodeURIComponent("Cozumel, MX");
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${encodedCity}&appid=${apiKey}`;

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weatherDescription = document.getElementById("weather-description");
const oneDayForecast = document.querySelector(".one-day-forecast");
const twoDayForecast = document.querySelector(".two-day-forecast");

async function checkWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // Aquí va el resto del código para manejar los datos del clima.

    } catch (error) {
        console.error("Error al obtener datos del clima:", error);
    }
}

checkWeather();
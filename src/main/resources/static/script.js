const weatherForm = document.getElementById('weatherForm');

weatherForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony po kliknięciu przycisku

    const city = document.getElementById('city').value;

    // Wysyłamy żądanie do backendu
    fetch(`http://localhost:8080/weather?city=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();  // Zamieniamy odpowiedź na JSON
        })
        .then(data => {
            console.log(data);  // Sprawdź, czy dane są poprawnie odbierane
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<p class="text-danger">${error.message}</p>`;
        });
});


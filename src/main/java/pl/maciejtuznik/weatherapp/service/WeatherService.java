package pl.maciejtuznik.weatherapp.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
    private final RestTemplate restTemplate = new RestTemplate();

    public String getWeatherForCity(String city) {
        String apiKey = "a283a8c80ad6f77f665a6c00f7f815be"; // Wprowadź klucz API
        String url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
        return restTemplate.getForObject(url, String.class);
    }
}

import { useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useGeoLocation from './useGeoLocation';
import useInterval from './useInterval';
import APIOpenWeather from '../api/APIOpenWeather';
import { WeatherData, WeatherCodeTypeMap } from '../models';
import weatherCodes from '../assets/weather-codes.json';

const WEATHER_KEY = 'weather';
export default function useCurrentWeather(): WeatherData | null {
  const [storedWeather, setStoredWeather] = useLocalStorage<WeatherData | null>(WEATHER_KEY, null);
  const geoLocation = useGeoLocation();

  const fetchWeatherData = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await APIOpenWeather.fetchWeatherByGeoLocation({
      lat: geoLocation.latitude,
      lon: geoLocation.longitude,
    });
    const weather = response.weather[0] ?? {};
    const data = {
      weather,
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      type: (weatherCodes as WeatherCodeTypeMap)[String(weather.id)],
    };
    setStoredWeather(data);
  }, [geoLocation, setStoredWeather]);

  useEffect(() => {
    if (JSON.stringify(storedWeather) === '{}' || storedWeather === null) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, storedWeather]);

  useInterval(() => {
    fetchWeatherData();
  }, 1000 * 600); // ms

  return storedWeather != null ? storedWeather : null;
}

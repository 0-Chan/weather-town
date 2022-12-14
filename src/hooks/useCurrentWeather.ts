import { useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useGeoLocation from './useGeoLocation';
import APIOpenWeather from '../api/APIOpenWeather';
import { WeatherData, WeatherCodeTypeMap } from '../models';
import weatherCodes from '../assets/weather-codes.json';

const WEATHER_KEY = 'weather';
export default function useCurrentWeather(): WeatherData | null {
  const [storedWeather, setStoredWeather] = useLocalStorage<WeatherData | null>(WEATHER_KEY, null);
  const geoLocation = useGeoLocation();

  console.log('1. siiiiiiiiiiiiiiiiiiiiibaaaaaaaaaaal');
  const fetchWeatherData = useCallback(async () => {
    console.log('2. siiiiiiiiiiiiiiiiiiiiibaaaaaaaaaaal');

    if (!geoLocation) {
      return;
    }
    console.log('🚀 | geoLocation', geoLocation.latitude);

    const response = await APIOpenWeather.fetchWeatherByGeoLocation({
      lat: geoLocation.latitude,
      lon: geoLocation.longitude,
    });
    console.log('🚀 | response', response);
    const weather = response.weather[0] ?? {};
    console.log('🚀 | weather', weather);
    const data = {
      weather,
      city: response.name,
      country: response.sys.country,
      temp: response.main.temp,
      type: (weatherCodes as WeatherCodeTypeMap)[String(weather.id)],
    };
    console.log('🚀 | data', data);
    setStoredWeather(data);
  }, [geoLocation, setStoredWeather]);

  useEffect(() => {
    console.log('3. siiiiiiiiiiiiiiiiiiiiibaaaaaaaaaaal');

    fetchWeatherData();
  }, [fetchWeatherData, storedWeather]);
  console.log('4. siiiiiiiiiiiiiiiiiiiiibaaaaaaaaaaal');

  return storedWeather != null ? storedWeather : null;
}

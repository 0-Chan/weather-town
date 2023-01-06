import { AxiosRequestConfig } from 'axios';
import APICore from './APICore';
import { OPEN_WEATHER_API_KEY } from '../constants';
import { WeatherDataResponse, Coords } from '../models';

class APIOpenWeather extends APICore {
  constructor(options: AxiosRequestConfig, token = '') {
    super(options, token);
  }

  async fetchWeatherByGeoLocation({ lat, lon }: Coords): Promise<WeatherDataResponse> {
    try {
      const response: WeatherDataResponse = (await this.get('/weather', {
        lat, lon, appid: this.token, units: 'metric',
      })).data;
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new APIOpenWeather(
  {
    baseURL: 'https://api.openweathermap.org/data/2.5',
  },
  OPEN_WEATHER_API_KEY,
);

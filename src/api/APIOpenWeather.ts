import { AxiosRequestConfig } from 'axios';
import APICore from './APICore';
import { OPEN_WEATHER_API_KEY } from '../constants';
import { WeatherDataResponse, Coords } from '../models';

class APIOpenWeather extends APICore {
  constructor(options: AxiosRequestConfig, key = '', units = '') {
    super(options, key, units);
  }

  async fetchWeatherByGeoLocation({ lat, lon }: Coords): Promise<WeatherDataResponse> {
    try {
      const response: WeatherDataResponse = (await this.get('/weather', {
        lat, lon, appid: this.token, units: this.units,
      })).data;
      console.log('🚀 | response', response);
      return response;
    } catch (err: any) {
      console.log(err.response.data);
      throw err;
    }
  }
}

export default new APIOpenWeather(
  {
    baseURL: 'https://api.openweathermap.org/data/2.5',
  },
  OPEN_WEATHER_API_KEY,
  'metric',
);

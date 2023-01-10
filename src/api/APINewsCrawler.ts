import { AxiosRequestConfig } from 'axios';

import APICore from './APICore';
import { NEWS_CRAWLER_API_KEY } from '../constants';
import { NewsData } from '../models';

class APINewsCrawler extends APICore {
  constructor(options: AxiosRequestConfig, token = '') {
    super(options, token);
  }

  async fetchNews(): Promise<NewsData[]> {
    try {
      const response: NewsData[] = (await this.get('/', {
      })).data;
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new APINewsCrawler(
  {
    baseURL: 'https://t3eb5ja42j.execute-api.ap-northeast-2.amazonaws.com/default/news',
    headers: { 'x-api-key': NEWS_CRAWLER_API_KEY },
  },
);

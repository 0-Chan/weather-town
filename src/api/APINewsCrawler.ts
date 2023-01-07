import { AxiosRequestConfig } from 'axios';

import APICore from './APICore';
import { NEWS_CRAWLER_API_KEY } from '../constants';
import { NewsDataResponse } from '../models';

class APINewsCrawler extends APICore {
  constructor(options: AxiosRequestConfig, token = '') {
    const newsOptions = {
      baseURL: 'https://t3eb5ja42j.execute-api.ap-northeast-2.amazonaws.com/default/naver-headline-crawler',
      headers: { 'x-api-key': NEWS_CRAWLER_API_KEY },
    };
    super(newsOptions, token);
  }

  async fetchNews(): Promise<NewsDataResponse> {
    console.log('🚀 | NEWS_CRAWLER_API_KEY', NEWS_CRAWLER_API_KEY);
    try {
      const response: NewsDataResponse = (await this.get('/', {
      })).data;
      console.log('🚀 | response', response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new APINewsCrawler(
  {
    baseURL: 'https://t3eb5ja42j.execute-api.ap-northeast-2.amazonaws.com/default',
  },
  NEWS_CRAWLER_API_KEY,
);

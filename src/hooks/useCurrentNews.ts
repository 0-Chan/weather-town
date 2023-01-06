import { useState, useCallback, useEffect } from 'react';
// import useInterval from './useInterval';
import APINewsCrawler from '../api/APINewsCrawler';
// import { NewsData } from '../models';

export default function useCurrentNews(): () => Promise<void> | null {
  const [news, setNews] = useState();

  const fetchNewsData = useCallback(async () => {
    const response = APINewsCrawler.fetchNews();
    // console.log('🚀 | response hooks', response);
    const data = response;
    console.log('🚀 | data hooks', data);
  }, [setNews]);

  useEffect(() => {
    console.log('🚀 | news', news);
    console.log('test');
    if (JSON.stringify(news) === undefined) {
      fetchNewsData();
    }
  }, []);

  return fetchNewsData;
}

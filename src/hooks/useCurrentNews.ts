import { useCallback, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import useInterval from './useInterval';
import APINewsCrawler from '../api/APINewsCrawler';
import { NewsData } from '../models';

const NEWS_KEY = 'news';
export default function useCurrentNews(): NewsData[] | null {
  const [storedNews, setStoredNews] = useLocalStorage<NewsData[] | null>(NEWS_KEY, null);

  const fetchNewsData = useCallback(async () => {
    const response = await APINewsCrawler.fetchNews();
    if (response.length !== 0) {
      setStoredNews(response);
    }
  }, []);

  useEffect(() => {
    if (true ?? JSON.stringify(storedNews)) {
      fetchNewsData();
    }
  }, [fetchNewsData, storedNews]);

  useInterval(() => {
    fetchNewsData();
  }, 1000 * 1860); // 31 min

  return storedNews ?? null;
}

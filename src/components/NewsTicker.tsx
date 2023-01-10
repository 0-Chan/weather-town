import styled from '@emotion/styled';

import useCurrentNews from '../hooks/useCurrentNews';
import { NewsData } from '../models';

import '../styles/animation.css';

const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 4.2rem;
  background-color: #5d5d5dc3;
  padding-left: 100%;
  box-sizing: content-box;
`;

const Ticker = styled.div`
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  animation: newsFlow linear 50s infinite;
`;

const News = styled.a`
  display: inline-block;
  padding: 0 2rem;
  font-size: 4rem;
  color: #ffffff;
  text-decoration: none;
`;

export default function NewsTicker() {
  const newsData = useCurrentNews();
  let news: NewsData[] = [];
  if (newsData?.length) {
    news = newsData;
  }
  return (
    <TickerWrapper>
      <Ticker>
        {news.length !== 0
        && news?.map((headline) => (
          <News key={headline.title} href={headline.url} target="_blank" rel="noopener noreferrer">
            {`${headline.title} |`}
          </News>
        ))}
      </Ticker>
    </TickerWrapper>
  );
}

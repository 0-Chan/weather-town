import styled from '@emotion/styled';

import useCurrentNews from '../hooks/useCurrentNews';

import '../styles/animation.css';

const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  height: 5rem;
  background-color: rgba(#000, 0.9);
  padding-left: 50%;
  box-sizing: content-box;
`;

const Ticker = styled.div`
  display: inline-block;
  height: 4rem;
  line-height: 4rem;
  white-space: nowrap;
  padding-right: 100%;
  box-sizing: content-box;
  animation: newsFlow linear 30s infinite;
`;

const News = styled.p`
  display: inline-block;
  padding: 0 2rem;
  font-size: 5rem;
  color: #ffffff;
`;

export default function NewsTicker() {
  const newsData = useCurrentNews();
  console.log('🚀 | newsData in compo', newsData);

  return (
    <TickerWrapper>
      <Ticker>
        <News>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </News>
        <News>
          bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        </News>
      </Ticker>
    </TickerWrapper>
  );
}

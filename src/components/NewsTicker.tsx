import styled from '@emotion/styled';
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

// .ticker-wrap {

//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   overflow: hidden;
//   height: 4rem;
//   background-color: rgba(#000, 0.9);
//   padding-left: 100%;
//   box-sizing: content-box;

//   .ticker {

//     display: inline-block;
//     height: 4rem;
//     line-height: 4rem;
//     white-space: nowrap;
//     padding-right: 100%;
//     box-sizing: content-box;

//     -webkit-animation-iteration-count: infinite;
//             animation-iteration-count: infinite;
//     -webkit-animation-timing-function: linear;
//             animation-timing-function: linear;
//    -webkit-animation-name: ticker;
//            animation-name: ticker;
//     -webkit-animation-duration: $duration;
//             animation-duration: $duration;

//     &__item {

//       display: inline-block;

//       padding: 0 2rem;
//       font-size: 2rem;
//       color: white;

//     }

//   }

// }

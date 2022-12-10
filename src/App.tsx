import { Global, css } from '@emotion/react';
import { format } from 'date-fns';

import './styles/App.css';
import './styles/animation.css';
import { getAnimationTime } from './utils';

import Clock from './components/Clock';
import Sky from './components/Sky';
import Town from './components/Town';
import People from './components/People';

const time = new Date();
const timeInHours = Number(format(time, 'HH'));
const animationName = getAnimationTime('bg', timeInHours);

const GlobalStyles = css`
  body {
    animation: ${animationName} linear 86400s infinite;
  }
`;

function App() {
  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <Clock currentTime={time} showDate />
      <section className="App-section">
        <Sky hours={timeInHours} />
        <Town hours={timeInHours} />
        <People hours={timeInHours} />
      </section>
    </div>
  );
}

export default App;

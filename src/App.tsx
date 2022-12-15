import { useState, useCallback } from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import './styles/App.css';
import './styles/animation.css';
import { getAnimationTime } from './utils';

import Clock from './components/Clock';
import Sky from './components/Sky';
import Town from './components/Town';
import People from './components/People';
import Weather from './components/Weather';
import { WeatherData } from './models';

const time = new Date();
const timeInHours = Number(format(time, 'HH'));
const animationName = getAnimationTime('bg', timeInHours);

const GlobalStyles = css`
  body {
    animation: ${animationName} linear 86400s infinite;
  }
`;

const Indicator = styled.div`
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
  font: 9.5rem/0.15 "Poiret one";
  color: #ffffff;
  text-align: center;
`;

function App() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const handleChangeWeather = useCallback((
    weather: WeatherData | null,
  ) => setCurrentWeather(weather), []);

  return (
    <div className="App">
      <Global styles={GlobalStyles} />
      <div className="Curtain-wrapper">
        <input type="checkbox" defaultChecked />
        <div className="Curtain-pannel left-part" />
        {/* prize */}
        <section className="App-section">
          <Sky hours={timeInHours} currentWeather={currentWeather} />
          <Town hours={timeInHours} />
          <People hours={timeInHours} />
        </section>
        <Indicator>
          <Clock currentTime={time} showDate />
          <Weather onChangeWeather={handleChangeWeather} />
        </Indicator>
        <div className="Curtain-pannel right-part" />
      </div>
    </div>
  );
}

export default App;

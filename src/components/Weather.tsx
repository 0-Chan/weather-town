import { useEffect } from 'react';
import styled from '@emotion/styled';

import useCurrentWeather from '../hooks/useCurrentWeather';
import { WeatherData } from '../models/Weather/Data';

const WeatherIndicate = styled.h1`
  width: 1000px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 150%);
  font: 2.5rem/1.2 "Poiret one";
  color: #ffffff;
  text-align: center;
`;

const CelsiusSymbol = styled.span`
  font-size: 3rem;
`;

interface Props {
  onChangeWeather: (weather: WeatherData | null) => void;
}

export default function Weather({ onChangeWeather }: Props) {
  const weatherData = useCurrentWeather();

  useEffect(() => {
    onChangeWeather?.(weatherData);
  }, [weatherData, onChangeWeather]);

  if (JSON.stringify(weatherData) === '{}' || weatherData === null) {
    return null;
  }

  return (
    <WeatherIndicate>
      {weatherData.type.description}
      {' '}
      /
      {' '}
      {weatherData.temp}
      {' '}
      <CelsiusSymbol>
        &#8451;
      </CelsiusSymbol>
    </WeatherIndicate>
  );
}

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
  font: 4rem/1.2 "Poiret one";
  color: #ffffff;
  text-align: center;
`;

const SmallSymbol = styled.span`
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

  console.log('🚀 | null1', weatherData);
  if (JSON.stringify(weatherData) === '{}' || weatherData === null) {
    console.log('🚀 | null2', weatherData);
    return null;
  }
  console.log('🚀 | null3', weatherData);

  return (
    <WeatherIndicate>
      {weatherData.type.description}
      {' '}
      /
      {' '}
      {weatherData.temp}
      {' '}
      <SmallSymbol>
        &#8451;
      </SmallSymbol>
    </WeatherIndicate>
  );
}

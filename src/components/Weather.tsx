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
  font: 6rem/1 "Poiret one";
  color: #ffffff;
  text-align: center;
`;

interface Props {
  onChangeWeather: (weather: WeatherData | null) => void;
}

export default function Weather({ onChangeWeather }: Props) {
  const weatherData = useCurrentWeather();
  // const currentCelsiusTemp = useMemo<number>(() => {
  //   if (!weatherData) {
  //     return Infinity;
  //   }
  //   return convert
  // })

  useEffect(() => {
    onChangeWeather?.(weatherData);
  }, [weatherData, onChangeWeather]);

  if (!weatherData) {
    return null;
  }

  return (
    <WeatherIndicate>
      {/* {weatherData.weather.main} */}
      {' '}
      {weatherData.temp}
    </WeatherIndicate>
  );
}

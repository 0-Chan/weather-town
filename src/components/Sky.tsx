import styled from '@emotion/styled';
import '../styles/animation.css';
import { getAnimationTime } from '../utils';
import { WeatherData } from '../models';

import sunImage from '../assets/images/sun.png';
import smallCloudImage from '../assets/images/smallCloud.png';
import bigCloudImage from '../assets/images/bigCloud.png';

const SkyWrapper = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Sun = styled.img<{ animationName: string }>`
  position: absolute;
  top: -150px;
  left: 50%;
  margin-left: -100px;
  transform-origin: center 500px;
  animation: ${({ animationName }) => (animationName ? `${animationName} linear 86400s infinite` : 'sun4 linear 86400s infinite')};
`;
const SmallCloud = styled.img`
  position: absolute;
  top: -30px;
  left: 10%;
  animation: movement linear 23s infinite;
`;
const BigCloud = styled.img`
  position: absolute;
  top: 20px;
  left: 0%;
  animation: movement linear 35s infinite;
`;

interface Props {
  hours: number,
  currentWeather: WeatherData | null
}

export default function Sky({ hours, currentWeather }: Props) {
  const startingAnimation = getAnimationTime('sun', hours);
  console.log('🚀 | currentWeather', currentWeather);

  return (
    <SkyWrapper>
      <Sun src={sunImage} alt="sun" animationName={startingAnimation} />
      <SmallCloud src={smallCloudImage} alt="small cloud" />
      <BigCloud src={bigCloudImage} alt="big cloud" />
    </SkyWrapper>
  );
}

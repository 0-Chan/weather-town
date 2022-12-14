import styled from '@emotion/styled';
import '../styles/animation.css';
import { getAnimationTime } from '../utils';

import wheelImage from '../assets/images/wheel.png';
import townDayImage from '../assets/images/town_day.png';
import townNightImage from '../assets/images/town_night.png';

const Wheel = styled.img`
  position: absolute;
  bottom: 104px;
  left: 50%;
  margin-left: -165px;
  opacity: 0.7;
  animation: wheelRotation linear 20s infinite;
`;
const TownNight = styled.img`
  position: absolute;
  bottom: 0px;
  left: 40px;
`;
const TownDay = styled.img<{ animationName: string }>`
  position: absolute;
  bottom: 0px;
  left: 40px;
  animation: ${({ animationName }) => (animationName ? `${animationName} linear 86400s infinite` : 'hide4 linear 86400s infinite')};
`;

interface Props {
  hours: number
}

export default function Town({ hours }: Props) {
  const startingAnimation = getAnimationTime('hide', hours);

  return (
    <>
      <Wheel src={wheelImage} />
      <TownNight src={townNightImage} />
      <TownDay src={townDayImage} animationName={startingAnimation} />
    </>
  );
}

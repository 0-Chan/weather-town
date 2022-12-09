import styled from '@emotion/styled';
import '../styles/animation.css';

import wheelImage from '../assets/wheel.png';
import townDayImage from '../assets/town_day.png';
import townNightImage from '../assets/town_night.png';

const Wheel = styled.img`
  position: absolute;
  bottom: 104px;
  left: 50%;
  margin-left: -165px;
  opacity: 0.7;
  animation: wheelRotation linear 20s infinite;
`;
const TownDay = styled.img`
  position: absolute;
  bottom: 0px;
  left: 40px;
`;
const TownNight = styled.img`
  position: absolute;
  bottom: 0px;
  left: 40px;
`;

export default function Town() {
  return (
    <>
      <Wheel src={wheelImage} />
      <TownDay src={townDayImage} />
      <TownNight src={townNightImage} />
    </>
  );
}

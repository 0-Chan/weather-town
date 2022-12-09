import styled from '@emotion/styled';
import '../styles/animation.css';
import { getAnimationTime } from '../utils';

import manImage from '../assets/man.png';
import familyImage from '../assets/family.png';

const PeopleWrapper = styled.article<{ animationName: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  animation: ${({ animationName }) => (animationName ? `${animationName} linear 86400s infinite` : 'hide4 linear 86400s infinite')};
`;
const Man = styled.img`
  position: absolute;
  left: 0px;
  animation: movement linear 10s infinite;
  bottom: 0px
`;
const Family = styled.img`
  position: absolute;
  left: 0px;
  animation: movement linear 23s infinite;
  bottom: 0px
`;

interface Props {
  hours: number
}

export default function People({ hours }: Props) {
  const startingAnimation = getAnimationTime('hide', hours);

  return (
    <PeopleWrapper animationName={startingAnimation}>
      <Man src={manImage} alt="man" />
      <Family src={familyImage} alt="family" />
    </PeopleWrapper>
  );
}

import styled from '@emotion/styled';
import '../styles/animation.css';

import sunImage from '../assets/sun.png';
import smallCloudImage from '../assets/smallCloud.png';
import bigCloudImage from '../assets/bigCloud.png';

const SkyWrapper = styled.article`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
const Sun = styled.img`
  position: absolute;
  top: -150px;
  left: 50%;
  margin-left: -100px;
  transform-origin: center 500px;
  border: 1px solid red;
`;
const SmallCloud = styled.img`
  position: absolute;
  top: -30px;
  left: 10%;
  border: 1px solid red;
  animation: movement linear 23s infinite;
`;
const BigCloud = styled.img`
  position: absolute;
  top: 20px;
  left: 0%;
  border: 1px solid red;
  animation: movement linear 35s infinite;
`;

export default function Sky() {
  return (
    <SkyWrapper>
      <Sun src={sunImage} alt="sun" />
      <SmallCloud src={smallCloudImage} alt="small cloud" />
      <BigCloud src={bigCloudImage} alt="big cloud" />
    </SkyWrapper>
  );
}

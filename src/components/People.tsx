import styled from '@emotion/styled';

import manImage from '../assets/man.png';
import familyImage from '../assets/family.png';

const PeopleWrapper = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Man = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0px
`;
const Family = styled.img`
  position: absolute;
  left: 0px;
  bottom: 0px
`;

export default function People() {
  return (
    <PeopleWrapper>
      <Man src={manImage} alt="man" />
      <Family src={familyImage} alt="family" />
    </PeopleWrapper>
  );
}
import styled from '@emotion/styled';
import './App.css';

import Sky from './components/Sky';
import Town from './components/Town';
import People from './components/People';

const Clock = styled.h1`
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 150%);
  font: 92px/1 "Poiret one";
  color: #ffffff;
  text-align: center;
  border: 1px solid red;
`;

function App() {
  return (
    <div className="App">
      <Clock>
        Clock⌚
      </Clock>
      <section className="App-section">
        <Sky />
        <Town />
        <People />
      </section>
    </div>
  );
}

export default App;

import styled from '@emotion/styled';
import './App.css';

import Sky from './components/Sky';
import Town from './components/Town';

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
        Clock
      </Clock>
      <section className="App-section">
        <Sky />
        <Town />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;

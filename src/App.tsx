// import styled from '@emotion/styled';
import './styles/App.css';

import Clock from './components/Clock';
import Sky from './components/Sky';
import Town from './components/Town';
import People from './components/People';

const currentTime = new Date();

function App() {
  return (
    <div className="App">
      <Clock date={currentTime} showDate />
      <section className="App-section">
        <Sky date={currentTime} />
        <Town />
        <People />
      </section>
    </div>
  );
}

export default App;

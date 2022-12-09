// import styled from '@emotion/styled';
import { format } from 'date-fns';
import './styles/App.css';

import Clock from './components/Clock';
import Sky from './components/Sky';
import Town from './components/Town';
import People from './components/People';

const time = new Date();
const timeInHours = Number(format(time, 'HH'));

function App() {
  return (
    <div className="App">
      <Clock currentTime={time} showDate />
      <section className="App-section">
        <Sky hours={timeInHours} />
        <Town />
        <People />
      </section>
    </div>
  );
}

export default App;

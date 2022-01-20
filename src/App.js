import Button from './components/Button/Button.js';
import Container from './components/Container/Container.js';
import Timer from './components/Timer/Timer.js';

import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('null');

  const start = (e) => {
    e.preventDefault();
    console.log('start clicked');
    setTimer(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1)
    );
  };

  const stop = (e) => {
    e.preventDefault();
    console.log('stop clicked');
    if (timer) clearInterval(timer);
  };

  const reset = () => {
    setTime(0);
    //setTimer('null');
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Timer value={time} />
      <Button onClick={start}>start</Button>
      <Button onClick={stop}>stop</Button>
      <Button onClick={reset}>reset</Button>
    </Container>
  );
};

export default App;

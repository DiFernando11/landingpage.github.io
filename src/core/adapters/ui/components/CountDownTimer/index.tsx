import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 24 * 60 * 60 * 1000;
  const tenMinutes = 10 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const savedEndTime = localStorage.getItem('countdownEndTime');
    if (savedEndTime) {
      const endTime = new Date(savedEndTime).getTime();
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;
      setTimeLeft(remainingTime > 0 ? remainingTime : 0);
    } else {
      const endTime = Date.now() + initialTime;
      localStorage.setItem('countdownEndTime', new Date(endTime).toISOString());
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0 || timeLeft <= tenMinutes) {
      const newEndTime = Date.now() + initialTime;
      setTimeLeft(initialTime);
      localStorage.setItem(
        'countdownEndTime',
        new Date(newEndTime).toISOString()
      );
    }

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="text-white fs-5 gradient-text">{formatTime(timeLeft)}</div>
  );
};

export default CountdownTimer;

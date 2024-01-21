import { useState, useEffect } from 'react';

interface MinuteListener {
    currentMinute: number
}

const useMinuteListener = (): MinuteListener => {
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());

  useEffect(() => {
    const updateMinute = () => {
      const newMinute = new Date().getMinutes();
      setCurrentMinute(newMinute);
    };
    const intervalId = setInterval(updateMinute, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return { currentMinute }
};

export default useMinuteListener;
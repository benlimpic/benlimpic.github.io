import { useEffect, useState } from 'react';

export default function useLocalTime() {
  const [time, setTime] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return { time, loading };
}

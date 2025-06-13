import { useEffect, useState } from 'react';

export default function useLocalTime() {
  const [time, setTime] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev ? new Date(prev.getTime() + 1000) : null));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const isLocal =
          location.hostname === 'localhost' ||
          location.hostname === '127.0.0.1';
        const localIP = '2603:8000:39f0:1390:7da4:7034:93d8:4957';
        const ipParam = isLocal ? localIP : 'auto';

        const res = await fetch(
          `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipParam}`
        );

        const data = await res.json();
        setLatitude(parseFloat(data.latitude));
        setLongitude(parseFloat(data.longitude));

        const rawDateTime = data.date_time_txt || data.date_time;
        if (rawDateTime) {
          const isoDateTime = rawDateTime.replace(' ', 'T');
          setTime(new Date(isoDateTime));
        } else {
          setTime(new Date());
        }
      } catch (err) {
        console.error('IPGeolocation error:', err);
        setTime(new Date());
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [apiKey]);

  return { time, latitude, longitude, loading };
}

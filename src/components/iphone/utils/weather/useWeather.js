import { useEffect, useState } from 'react';

export default function useWeather(latitude, longitude) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHERAPI_API_KEY;

  useEffect(() => {
    if (!latitude || !longitude) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error('WeatherAPI error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [latitude, longitude, apiKey]);

  return { weather, loading };
}

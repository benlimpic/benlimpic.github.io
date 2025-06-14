import { useEffect, useState } from 'react';

export default function useLocalWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_WEATHERAPI_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=1`
          );
          const data = await res.json();
          setWeatherData(data);
        } catch (err) {
          console.error('Weather API error:', err);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        setLoading(false);
      }
    );
  }, [apiKey]);

  return { weatherData, loading };
}

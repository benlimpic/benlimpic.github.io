import PropTypes from 'prop-types';

export default function WeatherWidget({ weather }) {
  if (!weather) return null;

  const tempF = weather.current.temp_f;
  const condition = weather.current.condition.text;
  const iconUrl = `https:${weather.current.condition.icon}`;

  return (
    <div
      className="relative flex flex-col items-center justify-center w-32 text-white h-36"
      style={{
        background: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(6px)',
        borderRadius: '1rem',
        border: '3px solid rgba(255,255,255,0.05)',
        boxShadow: '0 6px 24px rgba(0,0,0,0.4)',
        padding: '0.5rem',
      }}
    >
      <img
        src={iconUrl}
        alt="weather"
        className="mb-1 w-14 h-14 drop-shadow-lg"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
        }}
      />
      <div className="text-3xl font-semibold drop-shadow-lg">
        {Math.round(tempF)}°<span className="text-lg font-light">F</span>
      </div>
      <div className="text-xs font-medium text-center drop-shadow-sm opacity-85">
        {condition}
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  weather: PropTypes.object.isRequired,
};

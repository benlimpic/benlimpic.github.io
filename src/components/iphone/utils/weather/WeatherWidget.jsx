import PropTypes from 'prop-types';

const WeatherWidget = ({ weather }) => {
  const city = weather.location.name;
  const temp = Math.round(weather.current.temp_f);
  const condition = weather.current.condition.text;
  const iconUrl = `https:${weather.current.condition.icon}`;
  const high = Math.round(weather.forecast.forecastday[0].day.maxtemp_f);
  const low = Math.round(weather.forecast.forecastday[0].day.mintemp_f);

  return (
    <div
      className="flex flex-col items-start justify-center p-4 text-white"
      style={{
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        width: '160px',
        height: '160px',
      }}
    >
      <div className="text-lg font-semibold">{city}</div>
      <div className="flex items-center my-2">
        <div className="text-5xl font-bold">{temp}°</div>
        <img src={iconUrl} alt={condition} className="w-12 h-12 ml-2" />
      </div>
      <div className="text-sm">{condition}</div>
      <div className="text-sm">
        H:{high}° L:{low}°
      </div>
    </div>
  );
};

WeatherWidget.propTypes = { weather: PropTypes.object.isRequired };
export default WeatherWidget;

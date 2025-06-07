import PropTypes from 'prop-types';

const Notification = ({
  setAppSrc,
  iconSrc,
  title,
  description,
  time,
  appRoute,
}) => {
  return (
    <button
      className="flex items-center px-4 py-3 m-2 transition border shadow-lg w-80 rounded-2xl notification bg-white/70 backdrop-blur-md border-white/40 hover:bg-white/90"
      id={`notification-${title}`}
      type="button"
      onClick={() => setAppSrc(appRoute)}
      style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
    >
      <img
        className="w-12 h-12 mr-3 shadow rounded-xl"
        src={iconSrc}
        alt={title}
      />
      <div className="flex flex-col justify-center flex-1">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-gray-900">{title}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className="mt-0.5 text-left">
          <span className="text-xs text-gray-700">{description}</span>
        </div>
      </div>
    </button>
  );
};

Notification.propTypes = {
  setAppSrc: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  appRoute: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  iconSrc: '',
  title: '',
  description: '',
  time: '',
  appRoute: '',
};

export default Notification;

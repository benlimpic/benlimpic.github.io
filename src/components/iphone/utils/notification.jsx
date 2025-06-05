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
      className="h-20 m-2 rounded-lg w-80 notification bg-slate-300"
      id={`notification-${title}`}
      type="button"
      onClick={() => setAppSrc(appRoute)}
    >
      <div className="notificationIcon">
        {/* <img className="" src={iconSrc} alt={title} /> */}
      </div>
      <div className="notificationContent">
        <div className="notificationTitle">
          <span className="title">{title}</span>
        </div>
        <div className="notificationDescription">
          <span className="description">{description}</span>
        </div>
      </div>
      <div className="notificationTime">
        <span className="time">{time}</span>
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

export default Notification;

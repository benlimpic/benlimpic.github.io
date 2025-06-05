import PropTypes from 'prop-types';

const AppIcon = ({ setAppSrc, iconSrc, title, appRoute }) => {
  return (
    <button
      className="m-3 app-icon"
      id={'app-' + title}
      type="button"
      onClick={() => setAppSrc(appRoute)}
    >
      <div className={`w-16 h-16 mb-0.25 bg-blue-500 rounded-lg`}>
        {/* <img src={iconSrc} alt={title} /> */}
      </div>
      <span className="text-xs font-bold app-title">{title}</span>
    </button>
  );
};

AppIcon.propTypes = {
  setAppSrc: PropTypes.func.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  appRoute: PropTypes.string.isRequired,
};

export default AppIcon;

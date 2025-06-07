import PropTypes from 'prop-types';
import handleNewTab from './handleNewTab';

const ExternalLink = ({ iconSrc, title, appRoute }) => {
  return (
    <button
      className="m-3 app-icon"
      id={'app-' + title}
      type="button"
      onClick={() => handleNewTab(appRoute)}
    >
      <div className={`w-14 h-14 mb-0.25 rounded-md`}>
        <img src={iconSrc} alt={title} className="rounded-xl" />
      </div>
      <span className="text-xs font-bold app-title">{title}</span>
    </button>
  );
};

ExternalLink.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  appRoute: PropTypes.string.isRequired,
};

export default ExternalLink;

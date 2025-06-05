import PropTypes from 'prop-types';

const Application = ({ appSrc }) => {
  return (
    <div className={`w-full h-full bg-blue-500`}>
      <iframe
        src={appSrc}
        id="app-frame"
        title="Application Frame"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
        allow="fullscreen"
        className=""
      />
    </div>
  );
};

Application.propTypes = {
  appSrc: PropTypes.string.isRequired,
};

export default Application;

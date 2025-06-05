import PropTypes from 'prop-types';
import App from '../utils/appIcon';

const HomeScreen = ({ setAppSrc }) => {
  return (
    <div className="w-full h-full bg-yellow-500 home-screen" id="home-screen">
      <div className="flex items-center justify-between w-full h-12 px-4 homeNavTop">
        <div className="flex items-center justify-between w-full h-12 px-4 navLeft ">
          <div className="smallTime">00:00</div>
        </div>
        <div className="flex items-center justify-between w-full h-12 px-4 navRight ">
          <div className="cellular"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full appGrid">
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Shelved"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Profile"
          appRoute="profile"
        />
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Resume"
          appRoute="resume"
        />
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="App Title"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />
      </div>
      <div className="homeNavBottom">
        <App setAppSrc={setAppSrc} iconSrc="" title="" appRoute="" />
      </div>
    </div>
  );
};
HomeScreen.propTypes = {
  setAppSrc: PropTypes.func.isRequired,
};

export default HomeScreen;

import Notification from '../utils/notification';

const LockScreen = ({ setAppSrc }) => {
  return (
    <div className="w-full h-full bg-orange-500 lockScreen" id="lock-screen">
      <div className="homeNavTop">
        <div className="navLeft"></div>
        <div className="navRight">
          <div className="cellular"></div>
          <div className="wifi"></div>
          <div className="battery"></div>
        </div>
      </div>
      <div className="highMidNav">
        <div className="Day"></div>
        <div className="Date"></div>
        <div className="Location"></div>
        <div className="Time"></div>
      </div>
      <div className="bigTime">
        <div className="timeText">00:00</div>
      </div>
      <div className="midNav">
        <div className="midNavLeft">
          <div className="localWeather">
            <div className="weatherIcon"></div>
            <div className="temperature">00°</div>
            <div className="weatherDescription">Clear</div>
          </div>
        </div>
        <div className="midNavRight">
          <div className="quickSocials">
            <div className="linkedIn">
              <div className="linkedIn-icon"></div>
            </div>
            <div className="github">
              <div className="github-icon"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full notificationGrid">
        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Shelved"
          description="A new update is available"
          time="10:00 AM"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />

        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Profile"
          appRoute="profile"
        />

        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc="test"
          title="Resume"
          appRoute="resume"
        />
      </div>
      <div className="lowMidNav">
        <div className="profileButton">
          <div className="profile-icon"></div>
        </div>
        <div className="toggleLightDark">
          <div className="toggle-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;

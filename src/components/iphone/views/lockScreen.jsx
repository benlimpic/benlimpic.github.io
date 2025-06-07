import PropTypes from 'prop-types';
import Wallpaper from '../../../assets/background.png';
import CellIcons from '../../../assets/cellIcons.png';
import Github from '../../../assets/lock-github.png';
import LinkedIn from '../../../assets/lock-linkedin.png';
import Profile from '../../../assets/profile.png';
import Resume from '../../../assets/resume.png';
import Shelved from '../../../assets/shelved.png';
import ExternalLink from '../utils/externalLink';
import Notification from '../utils/notification';

const LockScreen = ({ setAppSrc }) => {
  return (
    <div
      className="relative w-full h-full home-screen"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="lock-screen"
    >
      <div className="flex items-center justify-between w-full h-12 px-4 homeNavTop">
        <div className="flex items-center h-12 pl-2 justify-left navLeft ">
          <div className="text-white smallTime">00:00</div>
        </div>
        <div className="flex items-center h-12 justify-right navRight ">
          <div className="text-white smallDate">
            <img className="h-4" src={CellIcons} alt="Cellular Icons" />
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center w-full h-12 text-white highMidNav">
        <div className="Day">Friday</div>
        <div className="Date">, June 6</div>
      </div>
      <div className="flex items-start justify-center w-full text-white w-100 bigTime">
        <div className="font-bold text-8xl timeText">12:34</div>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-24 notificationGrid">
        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Shelved}
          title="Shelved App"
          description="Try out my newest app!"
          time="10:00 AM"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />

        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Profile}
          title="Ben Limpic Profile"
          description="Get to know me a little!"
          appRoute="profile"
        />

        <Notification
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Resume}
          title="Resume"
          description="Career details and a downloadable PDF"
          appRoute="resume"
        />
      </div>
      <div
        className="flex items-center justify-between px-8 lowMidNav bottom-8"
        style={{ position: 'absolute', left: 0, right: 0 }}
      >
        <ExternalLink
          className="rounded-full opacity-50"
          iconSrc={Github}
          alt="GitHub"
          appRoute="https://github.com/benlimpic"
        />
        <ExternalLink
          className="rounded-full opacity-50"
          iconSrc={LinkedIn}
          alt="LinkedIn"
          appRoute="https://www.linkedin.com/in/benlimpic/"
        />
      </div>
    </div>
  );
};
LockScreen.propTypes = {
  setAppSrc: PropTypes.func.isRequired,
};

export default LockScreen;

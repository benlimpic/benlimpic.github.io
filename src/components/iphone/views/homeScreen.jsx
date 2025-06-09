import PropTypes from 'prop-types';
import Wallpaper from '../../../assets/background.png';
import CellIcons from '../../../assets/cellIcons.png';
import Github from '../../../assets/github.png';
import LinkedIn from '../../../assets/linkedin.png';
import Profile from '../../../assets/profile.png';
import Resume from '../../../assets/resume.png';
import Shelved from '../../../assets/shelved.png';
// spell-checker: disable-next-line
import TetrisLogo from '../../../assets/tetris/tetris-logo.png';
import App from '../utils/appIcon';
import ExternalLink from '../utils/externalLink';

const HomeScreen = ({ setAppSrc }) => {
  return (
    <div
      className="relative w-full h-full home-screen"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="home-screen"
    >
      <div className="flex items-center justify-between w-full h-12 px-4 homeNavTop">
        <div className="flex items-center h-12 pl-2 justify-left navLeft ">
          <div className="text-white smallTime">00:00</div>
        </div>
        <div className="flex items-center h-12 justify-right navRight ">
          <div className="text-white smallDate">
            <img className="h-4" src={CellIcons} alt="Cellular icons" />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center gap-1 pt-1 text-white rounded top-12 appGrid">
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Shelved}
          title="Shelved"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />
        {/* spell-checker: disable-next-line */}
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc={TetrisLogo}
          title="Tetris"
          appRoute="tetris"
        />
      </div>
      <div className="absolute left-0 flex items-center justify-center w-full gap-1 pt-1 text-white rounded bottom-8 bg-white/30 homeNavBottom">
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Profile}
          title="Profile"
          appRoute="profile"
        />
        <App
          className=""
          setAppSrc={setAppSrc}
          iconSrc={Resume}
          title="Resume"
          appRoute="resume"
        />
        <ExternalLink
          iconSrc={Github}
          title="Github"
          appRoute="https://github.com/benlimpic"
        />
        <ExternalLink
          iconSrc={LinkedIn}
          title="LinkedIn"
          appRoute="https://www.linkedin.com/in/benlimpic/"
        />
      </div>
    </div>
  );
};
HomeScreen.propTypes = {
  setAppSrc: PropTypes.func.isRequired,
};

export default HomeScreen;

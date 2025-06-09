import ApplicationPage from '../views/application';
import HomeScreen from '../views/homeScreen';
import LockScreen from '../views/lockScreen';
import PowerOnSplash from '../views/powerOnSplash';
import Profile from '../views/profile';
import Resume from '../views/resume';
import Tetris from '../views/tetris';

const IphoneRouter = ({ appSrc, setAppSrc }) => {
  switch (appSrc) {
    case 'lockScreen':
      return <LockScreen setAppSrc={setAppSrc} appSrc={appSrc} />;
    case 'homeScreen':
      return <HomeScreen setAppSrc={setAppSrc} appSrc={appSrc} />;
    case 'profile':
      return <Profile setAppSrc={setAppSrc} appSrc={appSrc} />;
    case 'resume':
      return <Resume setAppSrc={setAppSrc} appSrc={appSrc} />;
    case 'powerOnSplash':
      return <PowerOnSplash setAppSrc={setAppSrc} appSrc={appSrc} />;
    case 'tetris':
      return <Tetris setAppSrc={setAppSrc} appSrc={appSrc} />;
    // etc.
    default:
      return <ApplicationPage setAppSrc={setAppSrc} appSrc={appSrc} />;
  }
};

export default IphoneRouter;

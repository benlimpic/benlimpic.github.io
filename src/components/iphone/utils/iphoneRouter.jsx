import ApplicationPage from '../views/application';
import HomeScreen from '../views/homeScreen';
import LockScreen from '../views/lockScreen';
import PowerOnSplash from '../views/powerOnSplash';
import ProfilePage from '../views/profile';
import ResumePage from '../views/resume';

const IphoneRouter = ({ appSrc, setAppSrc, color, setColor }) => {
  let currentPage;

  if (appSrc === 'lockScreen') {
    currentPage = <LockScreen setAppSrc={setAppSrc} />;
  } else if (appSrc === 'homeScreen') {
    currentPage = <HomeScreen setAppSrc={setAppSrc} setColor={setColor} />;
  } else if (appSrc === 'profile') {
    currentPage = <ProfilePage setAppSrc={setAppSrc} />;
  } else if (appSrc === 'resume') {
    currentPage = <ResumePage setAppSrc={setAppSrc} />;
  } else if (appSrc === 'powerOnSplash') {
    currentPage = <PowerOnSplash setAppSrc={setAppSrc} />;
  } else {
    currentPage = (
      <ApplicationPage
        appSrc={appSrc}
        setAppSrc={setAppSrc}
        color={color}
        setColor={setColor}
      />
    );
  }

  return currentPage;
};

export default IphoneRouter;

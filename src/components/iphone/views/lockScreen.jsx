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
import useLocalTime from '../utils/weather/useLocalTime';
import useLocalWeather from '../utils/weather/useLocalWeather';
import WeatherWidget from '../utils/weather/WeatherWidget';

const LockScreen = ({ setAppSrc }) => {
  // eslint-disable-next-line no-unused-vars
  const { time, loading: timeLoading } = useLocalTime();
  const { weatherData, loading: weatherLoading } = useLocalWeather();

  const formattedTime = time
    ? `${time.getHours() % 12 || 12}:${time
        .getMinutes()
        .toString()
        .padStart(2, '0')}`
    : '--:--';

  const formattedDate = time
    ? time.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      })
    : '';
  const [day = '', date = ''] = formattedDate
    .split(',')
    .map((str) => str.trim());

  return (
    <div
      className="relative w-full h-full home-screen"
      style={{
        backgroundImage: `url(${Wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-between w-full h-12 px-4 homeNavTop">
        <div className="flex items-center h-12 pl-2 justify-left navLeft ">
          <div className="text-white smallTime">{formattedTime}</div>
        </div>
        <div className="flex items-center h-12 justify-right navRight ">
          <img className="h-4" src={CellIcons} alt="Cellular Icons" />
        </div>
      </div>

      <div className="flex items-end justify-center w-full h-12 text-white highMidNav">
        <div className="Day">{day}</div>
        <div className="Date">{date && `, ${date}`}</div>
      </div>

      <div className="flex items-start justify-center w-full text-white bigTime">
        <div className="font-bold text-8xl timeText">{formattedTime}</div>
      </div>

      <div className="flex justify-start mt-8 ml-5">
        {!weatherLoading && weatherData && (
          <WeatherWidget weather={weatherData} />
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-6 notificationGrid">
        <Notification
          setAppSrc={setAppSrc}
          iconSrc={Shelved}
          title="Shelved App"
          description="Try out my newest app!"
          time="10:00 AM"
          appRoute="https://shelved-demo-app.benlimpic.info"
        />
        <Notification
          setAppSrc={setAppSrc}
          iconSrc={Profile}
          title="Ben Limpic Profile"
          description="Get to know me a little!"
          appRoute="profile"
        />
        <Notification
          setAppSrc={setAppSrc}
          iconSrc={Resume}
          title="Resume"
          description="Career details and a downloadable PDF"
          appRoute="resume"
        />
      </div>

      <div className="absolute left-0 right-0 flex items-center justify-between px-8 lowMidNav bottom-8">
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

LockScreen.propTypes = { setAppSrc: PropTypes.func.isRequired };
export default LockScreen;

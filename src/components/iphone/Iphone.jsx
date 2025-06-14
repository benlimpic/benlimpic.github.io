import { useEffect, useState } from 'react';
import '../../styles/IphoneMockup.css';
import handleBottomBar from './utils/handleBottomBar';
import handleVolumeDown from './utils/handleBrightnessDown';
import handleVolumeUp from './utils/handleBrightnessUp';
import handlePowerButton from './utils/handlePowerButton';
import IphoneRouter from './utils/iphoneRouter.jsx';
import SplashScreen from './views/powerOnSplash';

const IphoneFrame = () => {
  const [brightness, setBrightness] = useState(0);
  const [appSrc, setAppSrc] = useState('lockScreen');
  const [color, setColor] = useState('bg-white');
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // splash duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="iphone-frame">
      {showSplash && <SplashScreen />}

      {!showSplash && (
        <>
          <div
            className="brightness"
            style={{ backgroundColor: `rgba(0, 0, 0, 0.${brightness})` }}
          />

          <div className="volume-buttons">
            <div className="button volume-up cycle-colors"></div>
            <div className="button volume-down cycle-colors"></div>
          </div>

          <div className="power-button cycle-colors"></div>
          <div className="bottom-bar cycle-colors"></div>

          <button
            className="hitbox volume-up-hitbox"
            onClick={() => handleVolumeUp(brightness, setBrightness)}
            title="brightness up"
          />
          <button
            className="hitbox volume-down-hitbox"
            onClick={() => handleVolumeDown(brightness, setBrightness)}
            title="brightness down"
          />
          <button
            className="hitbox power-hitbox"
            onClick={() => handlePowerButton(setAppSrc)}
            title="power button"
          />
          <button
            className="hitbox bottom-bar-hitbox"
            onClick={() => handleBottomBar(appSrc, setAppSrc)}
            title="home button"
          />

          <div className="flex items-center justify-center screen">
            <div className="phone-content">
              <IphoneRouter
                key={appSrc}
                appSrc={appSrc}
                setAppSrc={setAppSrc}
                color={color}
                setColor={setColor}
              />
            </div>
          </div>

          <div className="dynamic-island"></div>
        </>
      )}
    </div>
  );
};

export default IphoneFrame;

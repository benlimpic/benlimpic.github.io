import { useState } from 'react';
import '../../styles/IphoneMockup.css';
import handleBottomBar from './utils/handleBottomBar';
import handleVolumeDown from './utils/handleBrightnessDown';
import handleVolumeUp from './utils/handleBrightnessUp';
import handlePowerButton from './utils/handlePowerButton';
import IphoneRouter from './utils/iphoneRouter.jsx';

const IphoneFrame = () => {
  const [brightness, setBrightness] = useState(0);
  const [appSrc, setAppSrc] = useState('lockScreen');
  const [color, setColor] = useState('bg-white');

  return (
    <div className="iphone-frame">
      <div className="volume-buttons">
        <button
          type="button"
          className="button volume-up cycle-colors"
          id="volume-up"
          title="brightness up"
          onClick={() => handleVolumeUp(brightness, setBrightness)}
        ></button>
        <button
          type="button"
          className="button volume-down cycle-colors"
          id="volume-down"
          onClick={() => handleVolumeDown(brightness, setBrightness)}
          title="brightness down"
        ></button>
      </div>
      <button
        type="button"
        className="power-button cycle-colors"
        id="power-button"
        onClick={() => handlePowerButton(setAppSrc)}
        title="power Button"
      />
      <div className="dynamic-island"></div>
      <button
        type="button"
        className="bottom-bar cycle-colors"
        id="bottom-bar"
        onClick={() => handleBottomBar(appSrc, setAppSrc)}
        title="home button"
      />
      <div className="flex items-center justify-center screen">
        <div
          className="brightness"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.${brightness})` }}
          id="brightness"
          key={brightness}
        />

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
    </div>
  );
};

export default IphoneFrame;

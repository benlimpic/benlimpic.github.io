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
          className="button volume-up"
          id="volume-up"
          onClick={() => handleVolumeUp(brightness, setBrightness)}
          aria-label="Volume Up"
        ></button>
        <button
          type="button"
          className="button volume-down"
          id="volume-down"
          onClick={() => handleVolumeDown(brightness, setBrightness)}
          aria-label="Volume Down"
        ></button>
      </div>
      <button
        type="button"
        className="power-button"
        id="power-button"
        onClick={() => handlePowerButton(setAppSrc)}
        aria-label="Power Button"
      />
      <div className="dynamic-island"></div>
      <button
        type="button"
        className="bottom-bar"
        id="bottom-bar"
        onClick={() => handleBottomBar(appSrc, setAppSrc)}
        aria-label="Bottom Bar"
      />
      <div className="flex items-center justify-center w-full h-full screen">
        <div
          className="brightness"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.${brightness})` }}
          id="brightness"
          key={brightness}
        />
        <IphoneRouter
          key={appSrc}
          appSrc={appSrc}
          setAppSrc={setAppSrc}
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  );
};

export default IphoneFrame;

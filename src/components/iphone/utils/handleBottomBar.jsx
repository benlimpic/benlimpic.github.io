const handleBottomBar = (appSrc, setAppSrc) => {
  if (appSrc === 'lockScreen') {
    setAppSrc('homeScreen');
  } else if (appSrc === 'homeScreen') {
    setAppSrc('lockScreen');
  } else {
    setAppSrc('homeScreen');
  }
};

export default handleBottomBar;

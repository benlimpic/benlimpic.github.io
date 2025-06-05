const handlePowerButton = (setAppSrc) => {
  setAppSrc('powerOnSplash');
  setTimeout(() => {
    setAppSrc('lockScreen');
  }, 3000);
};

export default handlePowerButton;

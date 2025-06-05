const handleBrightnessDown = (brightness, setBrightness) => {
  const maxBrightness = 5;
  if (brightness < maxBrightness) {
    setBrightness(brightness + 1);
  } else {
    setBrightness(maxBrightness); // Ensure brightness does not go below 0
  }
};
export default handleBrightnessDown;

const handleBrightnessUp = (brightness, setBrightness) => {
  const minBrightness = 0;
  if (brightness > minBrightness) {
    setBrightness(brightness - 1);
  } else {
    setBrightness(minBrightness); // Ensure brightness does not exceed 100%
  }
};
export default handleBrightnessUp;

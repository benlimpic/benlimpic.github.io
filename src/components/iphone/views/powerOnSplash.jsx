import SplashLogo from '../../../assets/splashLogo.png';

const powerOnSplash = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full bg-black power-on-splash"
      id="power-on-splash"
    >
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-full">
        <img src={SplashLogo} alt="Ben Limpic" className="w-full donut-fade" />
      </div>
    </div>
  );
};

export default powerOnSplash;

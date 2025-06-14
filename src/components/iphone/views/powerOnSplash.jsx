import Logo from '../../../assets/strawberry.png'; // replace with your logo path
import '../../../styles/SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <img src={Logo} alt="Logo" className="splash-logo" />
    </div>
  );
};

export default SplashScreen;

import Footer from './components/Footer';
import Iphone from './components/iphone/Iphone';
import Stars from './components/stars.jsx';

import './styles/App.css';

export default function App() {
  return (
    <>
      <Stars className="fixed z-[-1]" />
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex items-center justify-center flex-1 w-full">
          <Iphone />
        </div>
        <Footer className="flex items-center justify-center w-full h-12" />
      </div>
    </>
  );
}

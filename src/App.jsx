import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Iphone from './components/iphone/Iphone';
import Stars from './components/stars.jsx';

import './styles/App.css';

export default function App() {
  return (
    <>
      <Stars className="fixed z-[-1]" />
      <div className="relative z-1">
        <Header />
        <main className="flex flex-col items-center justify-center py-12 overflow-y-auto bg-transparent">
          <Iphone />
          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}

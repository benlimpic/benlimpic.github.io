import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Iphone from './components/Iphone';
import './styles/App.css';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-100 max-w-screen">
      <Header />
      <main className="flex flex-col items-center justify-center py-12 overflow-y-auto bg-gray-100">
        <Iphone src="https://shelved-app-ad1942fd614d.herokuapp.com/login" />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

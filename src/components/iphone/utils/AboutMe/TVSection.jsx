import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Channel posters
import channel1 from '@/assets/tv/1.png';
import channel10 from '@/assets/tv/10.png';
import channel2 from '@/assets/tv/2.png';
import channel3 from '@/assets/tv/3.png';
import channel4 from '@/assets/tv/4.png';
import channel5 from '@/assets/tv/5.png';
import channel6 from '@/assets/tv/6.png';
import channel7 from '@/assets/tv/7.png';
import channel8 from '@/assets/tv/8.png';
import channel9 from '@/assets/tv/9.png';

// TV frame & transitions
import errorGif from '@/assets/tv/error.gif';
import staticGif from '@/assets/tv/static.gif';
import tvFrame from '@/assets/tv/tv.png';

export default function TVSection() {
  const channels = [
    channel1,
    channel2,
    channel3,
    channel4,
    channel5,
    channel6,
    channel7,
    channel8,
    channel9,
    channel10,
  ];

  const [currentChannel, setCurrentChannel] = useState(0);
  const [tvState, setTvState] = useState('active');

  useEffect(() => {
    if (tvState === 'off') return;

    const interval = setInterval(() => {
      setTvState('switching');
      setTimeout(() => {
        setCurrentChannel((prev) => (prev + 1) % channels.length);
        const nextState = Math.random() > 0.15 ? 'active' : 'error';
        setTvState(nextState);
      }, 750);
    }, 5000);

    return () => clearInterval(interval);
  }, [tvState, channels.length]);

  const handlePowerToggle = () => {
    setTvState(tvState === 'off' ? 'active' : 'off');
  };

  const renderScreen = () => {
    if (tvState === 'off') {
      return <div className="w-full h-full bg-black rounded" />;
    }

    const imageSrc =
      tvState === 'switching'
        ? staticGif
        : tvState === 'error'
        ? errorGif
        : channels[currentChannel];

    return (
      <motion.img
        key={tvState === 'active' ? currentChannel : tvState}
        src={imageSrc}
        alt="TV Content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="object-cover w-full h-full"
      />
    );
  };

  return (
    <section className="relative mb-10">
      <div className="flex items-center justify-start mb-4 group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-800 group-hover:w-32"></div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
          Favorite TV
        </h2>
      </div>

      <div className="relative flex items-center justify-center w-full max-w-sm mx-auto aspect-[4/3]">
        {/* TV screen */}
        <div
          className="absolute z-10 overflow-hidden bg-black rounded"
          style={{ width: '65%', height: '58%', top: '25%', left: '8%' }}
        >
          <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>

          <img
            src={staticGif}
            alt="Texture"
            className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none opacity-30 mix-blend-overlay"
          />
        </div>

        {/* TV Frame */}
        <img
          src={tvFrame}
          alt="TV Frame"
          className="absolute z-20 object-contain w-full h-full"
        />

        {/* Power button */}
        <button
          onClick={handlePowerToggle}
          className="absolute z-30 px-4 py-2 text-xs font-bold text-yellow-300 bg-red-600 border-2 rounded-full shadow border-slate-950 right-4 bottom-10 hover:bg-red-700"
        >
          {tvState === 'off' ? 'On' : 'Off'}
        </button>
      </div>
    </section>
  );
}

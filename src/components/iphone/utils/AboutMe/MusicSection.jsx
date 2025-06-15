import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Import band images
import band1 from '@/assets/music/1.png';
import band10 from '@/assets/music/10.png';
import band2 from '@/assets/music/2.png';
import band3 from '@/assets/music/3.png';
import band4 from '@/assets/music/4.png';
import band5 from '@/assets/music/5.png';
import band6 from '@/assets/music/6.png';
import band7 from '@/assets/music/7.png';
import band8 from '@/assets/music/8.png';
import band9 from '@/assets/music/9.png';

const albums = [
  { artist: 'Bon Iver', cover: band1 },
  { artist: 'The Strokes', cover: band2 },
  { artist: 'Band of Horses', cover: band3 },
  { artist: 'Father John Misty', cover: band4 },
  { artist: 'Phoebe Bridgers', cover: band5 },
  { artist: 'David Bazan', cover: band6 },
  { artist: 'The Beatles', cover: band7 },
  { artist: 'Elliott Smith', cover: band8 },
  { artist: 'Counting Crows', cover: band9 },
  { artist: 'Death Cab for Cutie', cover: band10 },
];

// Duplicate albums for infinite scroll
const fullStrip = [
  ...albums,
  ...albums,
  ...albums,
  ...albums,
  ...albums,
  ...albums,
];

export default function MusicSection() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <section className="relative w-full mb-8">
      <div className="flex items-center justify-start mb-4 group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-300 dark:bg-slate-700 group-hover:w-32"></div>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Favorite Music
        </h2>
      </div>

      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <motion.div
          className="flex items-start gap-8"
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 60,
          }}
        >
          {fullStrip.map((album, index) => (
            <motion.div
              key={`${album.artist}-${index}`}
              className="flex flex-col items-center flex-none cursor-pointer w-36"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative border-2 rounded-lg shadow-lg dark:bg-white dark:border-white">
                <div className="w-40 overflow-hidden rounded-lg h-60">
                  <img
                    src={album.cover}
                    alt={album.artist}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="w-full mt-2 text-sm leading-snug text-center break-words text-slate-800 dark:text-slate-200">
                {album.artist}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
              <img
                src={selectedAlbum.cover}
                alt={selectedAlbum.artist}
                className="object-cover h-48 mb-4 rounded w-96"
              />
              <h3 className="mb-2 text-xl font-bold">{selectedAlbum.artist}</h3>
              <button
                onClick={() => setSelectedAlbum(null)}
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

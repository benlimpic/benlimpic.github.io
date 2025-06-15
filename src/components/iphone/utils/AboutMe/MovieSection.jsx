import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

// Import posters
import poster1 from '@/assets/movies/1.png';
import poster2 from '@/assets/movies/2.png';
import poster3 from '@/assets/movies/3.png';
import poster4 from '@/assets/movies/4.png';
import poster5 from '@/assets/movies/5.png';
import poster6 from '@/assets/movies/6.png';
import poster7 from '@/assets/movies/7.png';
import poster8 from '@/assets/movies/8.png';

export default function MoviesSection() {
  const movies = [
    { title: 'There Will Be Blood', year: 2007, poster: poster1 },
    { title: 'Tombstone', year: 1993, poster: poster2 },
    { title: 'The Brutalist', year: 2024, poster: poster3 },
    { title: 'A Complete Unknown', year: 2024, poster: poster4 },
    { title: 'Moneyball', year: 2011, poster: poster5 },
    { title: 'Enter the Dragon', year: 1973, poster: poster6 },
    { title: 'Full Metal Jacket', year: 1987, poster: poster7 },
    { title: 'Oppenheimer', year: 2023, poster: poster8 },
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  // Duplicate filmstrip multiple times for seamless continuous scroll
  const filmStrip = [
    ...movies,
    ...movies,
    ...movies,
    ...movies,
    ...movies,
    ...movies,
  ];

  return (
    <section className="relative w-full mb-8">
      <div className="flex items-center justify-start mb-4 group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-300 dark:bg-slate-700 group-hover:w-32"></div>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Favorite Films
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
          {filmStrip.map((movie, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center flex-none cursor-pointer w-36 "
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="relative border-2 rounded-lg shadow-lg dark:bg-white dark:border-white border:">
                <div className="w-40 overflow-hidden rounded-lg h-60">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="w-full mt-2 text-sm leading-snug text-center break-words text-slate-800 dark:text-slate-200">
                {movie.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedMovie && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black bg-opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMovie(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  className="mb-4 rounded"
                />
                <h3 className="mb-2 text-xl font-bold">
                  {selectedMovie.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Year: {selectedMovie.year}
                </p>
                <button
                  onClick={() => setSelectedMovie(null)}
                  className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

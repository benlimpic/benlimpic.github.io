import { useState } from 'react';

// Import movie posters
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => setSelectedMovie(index);
  const closeModal = () => setSelectedMovie(null);

  const paginate = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'left'
        ? (prev - 1 + movies.length) % movies.length
        : (prev + 1) % movies.length
    );
  };

  const centerMovie = movies[(currentIndex + 1) % movies.length];

  return (
    <section className="relative w-full mb-8">
      <div className="flex items-center justify-start group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-300 dark:bg-slate-700 group-hover:w-32"></div>
        <h2 className="mb-6 text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Favorite Films
        </h2>
      </div>

      <div className="relative flex justify-center w-full">
        <div
          style={{
            width: '360px',
            height: '240px',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => paginate('left')}
            className="absolute z-20 p-2 text-gray-600 bg-gray-200 rounded-full shadow-md opacity-50 hover:opacity-70 left-10 dark:bg-gray-800 dark:text-white"
          >
            ◀
          </button>

          <div className="flex items-center space-x-4 transition-all duration-500">
            {[...Array(3)].map((_, offset) => {
              const index = (currentIndex + offset) % movies.length;
              const movie = movies[index];
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="relative flex items-center justify-center flex-none w-40 overflow-hidden transition-transform duration-300 bg-transparent border-none rounded-lg shadow-lg cursor-pointer h-60 hover:scale-105 focus:outline-none dark:shadow-gray-800 shadow-gray-400"
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="object-cover w-full h-full rounded"
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => paginate('right')}
            className="absolute z-20 p-2 text-gray-600 bg-gray-200 rounded-full shadow-md opacity-50 hover:opacity-70 right-10 dark:bg-gray-800 dark:text-white"
          >
            ▶
          </button>
        </div>
      </div>

      <div className="mt-4 font-sans text-sm text-center text-slate-800 dark:text-slate-200">
        {centerMovie.title}
      </div>

      {selectedMovie !== null && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
              <h3 className="mb-2 text-xl font-bold">
                {movies[selectedMovie].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Year: {movies[selectedMovie].year}
              </p>
              <button
                onClick={closeModal}
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

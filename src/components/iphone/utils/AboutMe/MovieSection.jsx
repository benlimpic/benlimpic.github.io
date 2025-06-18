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
    {
      title: 'There Will Be Blood',
      year: 2007,
      poster: poster1,
      director: 'Paul Thomas Anderson',
      starring: 'Daniel Day-Lewis, Paul Dano',
      releaseDate: 'December 26, 2007',
    },
    {
      title: 'Tombstone',
      year: 1993,
      poster: poster2,
      director: 'George P. Cosmatos',
      starring: 'Kurt Russell, Val Kilmer',
      releaseDate: 'December 25, 1993',
    },
    {
      title: 'The Brutalist',
      year: 2024,
      poster: poster3,
      director: 'Brady Corbet',
      starring: 'Joel Edgerton, Marion Cotillard',
      releaseDate: '2024',
    },
    {
      title: 'A Complete Unknown',
      year: 2024,
      poster: poster4,
      director: 'James Mangold',
      starring: 'Timothée Chalamet',
      releaseDate: '2024',
    },
    {
      title: 'Moneyball',
      year: 2011,
      poster: poster5,
      director: 'Bennett Miller',
      starring: 'Brad Pitt, Jonah Hill',
      releaseDate: 'September 23, 2011',
    },
    {
      title: 'Enter the Dragon',
      year: 1973,
      poster: poster6,
      director: 'Robert Clouse',
      starring: 'Bruce Lee, John Saxon',
      releaseDate: 'August 19, 1973',
    },
    {
      title: 'Full Metal Jacket',
      year: 1987,
      poster: poster7,
      director: 'Stanley Kubrick',
      starring: "Matthew Modine, Vincent D'Onofrio",
      releaseDate: 'June 26, 1987',
    },
    {
      title: 'Oppenheimer',
      year: 2023,
      poster: poster8,
      director: 'Christopher Nolan',
      starring: 'Cillian Murphy, Emily Blunt',
      releaseDate: 'July 21, 2023',
    },
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
          Excellent Films
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
            className="absolute z-20 p-2 text-gray-600 bg-gray-200 rounded-full shadow-md opacity-50 hover:opacity-70 left-6 dark:bg-gray-800 dark:text-white"
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
            className="absolute z-20 p-2 text-gray-600 bg-gray-200 rounded-full shadow-md opacity-50 hover:opacity-70 right-6 dark:bg-gray-800 dark:text-white"
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
          {/* Overlay Background */}
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm px-6 py-8 transition-all duration-300 border border-gray-200 shadow-2xl bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl dark:border-gray-700">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {movies[selectedMovie].title}
              </h3>

              <div className="flex justify-center mb-5">
                <img
                  src={movies[selectedMovie].poster}
                  alt={movies[selectedMovie].title}
                  className="object-cover h-64 rounded-lg w-44"
                />
              </div>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Release Date:
                  </span>{' '}
                  {movies[selectedMovie].releaseDate}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Director:
                  </span>{' '}
                  {movies[selectedMovie].director}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Starring:
                  </span>{' '}
                  {movies[selectedMovie].starring}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-full px-4 py-2 mt-6 text-white transition bg-blue-600 rounded hover:bg-blue-700"
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

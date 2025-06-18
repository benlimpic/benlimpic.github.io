import { useState } from 'react';

// Import album covers
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

export default function MusicSection() {
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

  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => setSelectedAlbum(index);
  const closeModal = () => setSelectedAlbum(null);

  const paginate = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'left'
        ? (prev - 1 + albums.length) % albums.length
        : (prev + 1) % albums.length
    );
  };

  const centerAlbum = albums[(currentIndex + 1) % albums.length];

  return (
    <section className="relative w-full mb-8">
      <div className="flex items-center justify-start group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-300 dark:bg-slate-700 group-hover:w-32"></div>
        <h2 className="mb-6 text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Favorite Music
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
              const index = (currentIndex + offset) % albums.length;
              const album = albums[index];
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="relative flex items-center justify-center flex-none w-40 overflow-hidden transition-transform duration-300 bg-transparent border-none rounded-lg shadow-lg cursor-pointer h-60 hover:scale-105 focus:outline-none dark:shadow-gray-800 shadow-gray-400"
                >
                  <img
                    src={album.cover}
                    alt={album.artist}
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
        {centerAlbum.artist}
      </div>

      {selectedAlbum !== null && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
              <h3 className="mb-2 text-xl font-bold">
                {albums[selectedAlbum].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Year: {albums[selectedAlbum].year}
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

import { useState } from 'react';

// Import album covers
import band1 from '@/assets/music/1.png';
import band10 from '@/assets/music/10.png';
import band11 from '@/assets/music/11.png';
import band12 from '@/assets/music/12.png';
import band2 from '@/assets/music/2.png';
import band3 from '@/assets/music/3.png';
import band4 from '@/assets/music/4.png';
import band5 from '@/assets/music/5.png';
import band6 from '@/assets/music/6.png';
import band7 from '@/assets/music/7.png';
import band8 from '@/assets/music/8.png';
import band9 from '@/assets/music/9.png';

import cover1 from '@/assets/music/cover1.png';
import cover10 from '@/assets/music/cover10.png';
import cover11 from '@/assets/music/cover11.png';
import cover12 from '@/assets/music/cover12.png';
import cover2 from '@/assets/music/cover2.png';
import cover3 from '@/assets/music/cover3.png';
import cover4 from '@/assets/music/cover4.png';
import cover5 from '@/assets/music/cover5.png';
import cover6 from '@/assets/music/cover6.png';
import cover7 from '@/assets/music/cover7.png';
import cover8 from '@/assets/music/cover8.png';
import cover9 from '@/assets/music/cover9.png';

export default function MusicSection() {
  const albums = [
    {
      title: 'Bon Iver',
      coverImage: cover1,
      albumImage: band1,
      biggestAlbum: 'For Emma, Forever Ago',
      releaseDate: '2007',
      hometown: 'Eau Claire, Wisconsin',
    },
    {
      title: 'The Strokes',
      coverImage: cover2,
      albumImage: band2,
      biggestAlbum: 'Is This It',
      releaseDate: '2001',
      hometown: 'New York City, New York',
    },
    {
      title: 'Band of Horses',
      coverImage: cover3,
      albumImage: band3,
      biggestAlbum: 'Everything All the Time',
      releaseDate: '2006',
      hometown: 'Seattle, Washington',
    },
    {
      title: 'Father John Misty',
      coverImage: cover4,
      albumImage: band4,
      biggestAlbum: 'I Love You, Honeybear',
      releaseDate: '2015',
      hometown: 'Rockville, Maryland',
    },
    {
      title: 'Phoebe Bridgers',
      coverImage: cover5,
      albumImage: band5,
      biggestAlbum: 'Punisher',
      releaseDate: '2020',
      hometown: 'Los Angeles, California',
    },
    {
      title: 'David Bazan',
      coverImage: cover6,
      albumImage: band6,
      biggestAlbum: 'Curse Your Branches',
      releaseDate: '2009',
      hometown: 'Seattle, Washington',
    },
    {
      title: 'The Beatles',
      coverImage: cover7,
      albumImage: band7,
      biggestAlbum: 'Abbey Road',
      releaseDate: '1969',
      hometown: 'Liverpool, England',
    },
    {
      title: 'Elliott Smith',
      coverImage: cover8,
      albumImage: band8,
      biggestAlbum: 'Either/Or',
      releaseDate: '1997',
      hometown: 'Portland, Oregon',
    },
    {
      title: 'Death Cab for Cutie',
      coverImage: cover9,
      albumImage: band9,
      biggestAlbum: 'Transatlanticism',
      releaseDate: '2003',
      hometown: 'Bellingham, Washington',
    },
    {
      title: 'Counting Crows',
      coverImage: cover10,
      albumImage: band10,
      biggestAlbum: 'August and Everything After',
      releaseDate: '1993',
      hometown: 'Berkeley, California',
    },
    {
      title: 'Augustana',
      coverImage: cover11,
      albumImage: band11,
      biggestAlbum: 'All the Stars and Boulevards',
      releaseDate: '2005',
      hometown: 'San Diego, California',
    },
    {
      title: 'Coldplay',
      coverImage: cover12,
      albumImage: band12,
      biggestAlbum: 'A Rush of Blood to the Head',
      releaseDate: '2002',
      hometown: 'London, England',
    },
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
            className="absolute z-20 p-2 text-gray-600 bg-gray-200 rounded-full shadow-md opacity-50 hover:opacity-70 left-6 dark:bg-gray-800 dark:text-white"
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
                    src={album.albumImage}
                    alt={album.title}
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
        {centerAlbum.title}
      </div>

      {selectedAlbum !== null && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="w-full max-w-sm px-6 py-8 transition-all duration-300 border border-gray-200 shadow-2xl bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl dark:border-gray-700">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {albums[selectedAlbum].title}
              </h3>

              <div className="flex justify-center mb-5">
                <img
                  src={albums[selectedAlbum].coverImage}
                  alt={albums[selectedAlbum].title}
                  className="object-cover rounded-lg shadow-lg w-44 h-44 "
                />
              </div>

              <div className="space-y-3 text-[15px] text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Album:
                  </span>{' '}
                  {albums[selectedAlbum].biggestAlbum}
                </p>
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Release Date:
                  </span>{' '}
                  {albums[selectedAlbum].releaseDate}
                </p>
                <p>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Hometown:
                  </span>{' '}
                  {albums[selectedAlbum].hometown}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-full py-2 mt-6 text-sm font-medium text-white transition rounded-md shadow-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
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

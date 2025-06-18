import { useState } from 'react';

// Import shelf image
import shelfImg from '@/assets/books/shelf.png';

// Import book covers
import img1 from '@/assets/books/1.png';
import img10 from '@/assets/books/10.png';
import img11 from '@/assets/books/11.png';
import img12 from '@/assets/books/12.png';
import img13 from '@/assets/books/13.png';
import img14 from '@/assets/books/14.png';
import img2 from '@/assets/books/2.png';
import img7 from '@/assets/books/7.png';

import book1 from '@/assets/books/book1.png';
import book10 from '@/assets/books/book10.png';
import book11 from '@/assets/books/book11.png';
import book12 from '@/assets/books/book12.png';
import book13 from '@/assets/books/book13.png';
import book14 from '@/assets/books/book14.png';
import book2 from '@/assets/books/book2.png';
import book3 from '@/assets/books/book3.png';
import book4 from '@/assets/books/book4.png';
import book5 from '@/assets/books/book5.png';
import book6 from '@/assets/books/book6.png';
import book7 from '@/assets/books/book7.png';
import book8 from '@/assets/books/book8.png';
import book9 from '@/assets/books/book9.png';

export default function BooksSection() {
  const books = [
    {
      title: 'The Fountainhead',
      author: 'Ayn Rand',
      releaseDate: '1943',
      cover: img1,
      bookCover: book1,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Atlas Shrugged',
      author: 'Ayn Rand',
      releaseDate: '1957',
      cover: img2,
      bookCover: book2,
      font: 'font-bold',
      textColor: 'text-green-800',
      margin: 'mt-3',
    },
    {
      title: 'A Connecticut Yankee',
      author: 'Mark Twain',
      releaseDate: '1889',
      cover: img10,
      bookCover: book3,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'The Innocents Abroad',
      author: 'Mark Twain',
      releaseDate: '1869',
      cover: img1,
      bookCover: book4,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Master & Commander',
      author: "Patrick O'Brian",
      releaseDate: '1969',
      cover: img10,
      bookCover: book5,
      font: 'font-extrabold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Medium Raw',
      author: 'Anthony Bourdain',
      releaseDate: '2010',
      cover: img7,
      bookCover: book6,
      font: 'font-serif',
      textColor: 'text-white',
    },
    {
      title: 'Kitchen Confidential',
      author: 'Anthony Bourdain',
      releaseDate: '2000',
      cover: img10,
      bookCover: book7,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'The Martian',
      author: 'Andy Weir',
      releaseDate: '2011',
      cover: img14,
      bookCover: book8,
      font: 'font-bold',
      textColor: 'text-green-800',
    },
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      releaseDate: '2021',
      cover: img1,
      bookCover: book9,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Tokyo Vice',
      author: 'Jake Adelstein',
      releaseDate: '2009',
      cover: img10,
      bookCover: book10,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Tokyo Noir',
      author: 'Jake Adelstein',
      releaseDate: '2023',
      cover: img11,
      bookCover: book11,
      font: 'font-serif',
      textColor: 'text-blue-700',
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
      releaseDate: '1954',
      cover: img12,
      bookCover: book12,
      font: 'font-bold',
      textColor: 'text-yellow-700',
      margin: 'mb-8',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      releaseDate: '1965',
      cover: img13,
      bookCover: book13,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Einstein',
      author: 'Walter Isaacson',
      releaseDate: '2007',
      cover: img14,
      bookCover: book14,
      font: 'font-bold',
      textColor: 'text-green-800',
    },
  ];

  const [selectedBook, setSelectedBook] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => setSelectedBook(index);
  const closeModal = () => setSelectedBook(null);

  const paginate = (direction) => {
    setCurrentIndex((prev) =>
      direction === 'left'
        ? (prev - 1 + books.length) % books.length
        : (prev + 1) % books.length
    );
  };

  // The middle book is always index 1 in the 3-book view
  const centerBook = books[(currentIndex + 1) % books.length];

  return (
    <section className="relative w-full mb-8">
      <div className="flex items-center justify-start group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-300 dark:bg-slate-700 group-hover:w-32"></div>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Books I Love
        </h2>
      </div>

      <div className="relative flex justify-center w-full">
        <img
          src={shelfImg}
          alt="Shelf"
          style={{ width: '450px', height: '240px' }}
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
              const index = (currentIndex + offset) % books.length;
              const book = books[index];
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSelect(index);
                    }
                  }}
                  type="button"
                  tabIndex={0}
                  className="relative flex items-center justify-center flex-none w-16 overflow-hidden transition-transform duration-300 bg-transparent border-none cursor-pointer h-44 hover:scale-105 focus:outline-none"
                  aria-label={`Select book: ${book.title}`}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-auto h-full mx-auto"
                  />
                  <div
                    className={`rotate-[-90deg] text-xs ${book.font} ${book.textColor} ${book.margin} font text-center whitespace-nowrap z-10 absolute`}
                  >
                    {book.title}
                  </div>
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

      {/* Title displayed below shelf */}
      <div className="font-sans text-sm text-center text-slate-800 dark:text-slate-200">
        {centerBook.title}
      </div>

      {selectedBook !== null && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm px-6 py-8 transition-all duration-300 border border-gray-200 shadow-2xl bg-gradient-to-br from-white to-slate-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl dark:border-gray-700">
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
                {books[selectedBook].title}
              </h3>

              <div className="flex justify-center mb-5">
                <img
                  src={books[selectedBook].bookCover}
                  alt={books[selectedBook].title}
                  className="object-cover w-40 mb-4 rounded shadow-lg h-60"
                />
              </div>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Author:
                  </span>{' '}
                  {books[selectedBook].author}
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Release Date:
                  </span>{' '}
                  {books[selectedBook].releaseDate}
                </p>
              </div>

              <button
                onClick={closeModal}
                className="px-4 py-2 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700"
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

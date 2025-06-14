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

export default function BooksSection() {
  const books = [
    {
      title: 'The Fountainhead',
      author: 'Ayn Rand',
      cover: img1,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Atlas Shrugged',
      author: 'Ayn Rand',
      cover: img2,
      font: 'font-bold',
      textColor: 'text-green-800',
      margin: 'mt-3',
    },
    {
      title: 'A Connecticut Yankee',
      author: 'Mark Twain',
      cover: img10,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'The Innocents Abroad',
      author: 'Mark Twain',
      cover: img1,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Master & Commander',
      author: "Patrick O'Brian",
      cover: img10,
      font: 'font-extrabold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Medium Raw',
      author: 'Anthony Bourdain',
      cover: img7,
      font: 'font-serif',
      textColor: 'text-white',
    },
    {
      title: 'Kitchen Confidential',
      author: 'Anthony Bourdain',
      cover: img10,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'The Martian',
      author: 'Andy Weir',
      cover: img14,
      font: 'font-bold',
      textColor: 'text-green-800',
    },
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: img1,
      font: 'font-sans',
      textColor: 'text-white',
    },
    {
      title: 'Tokyo Vice',
      author: 'Jake Adelstein',
      cover: img10,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Tokyo Noir',
      author: 'Jake Adelstein',
      cover: img11,
      font: 'font-serif',
      textColor: 'text-blue-700',
    },
    {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkien',
      cover: img12,
      font: 'font-bold',
      textColor: 'text-yellow-700',
      margin: 'mb-8',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      cover: img13,
      font: 'font-bold',
      textColor: 'text-yellow-500',
    },
    {
      title: 'Einstein',
      author: 'Walter Isaacson',
      cover: img14,
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

  return (
    <section className="relative mb-10">
      <div className="flex items-center justify-start mb-4 group">
        <div className="w-0 h-1 mr-4 transition-all duration-500 bg-slate-800 group-hover:w-32"></div>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">
          Favorite Books
        </h2>
      </div>

      <div className="relative w-full ht-1/2">
        <img
          src={shelfImg}
          alt="Shelf"
          style={{ width: '450px', height: '240px' }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => paginate('left')}
            className="absolute z-20 p-2 text-gray-600 bg-white rounded-full shadow-md opacity-90 hover:opacity-60 left-9 dark:bg-gray-800 dark:text-white"
          >
            ◀
          </button>

          <div className="flex items-center space-x-4 transition-all duration-500">
            {[...Array(3)].map((_, offset) => {
              const index = (currentIndex + offset) % books.length;
              const book = books[index];
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="relative flex items-center justify-center flex-none w-10 h-40 overflow-hidden transition-transform duration-300 cursor-pointer sm:w-12 sm:h-44 hover:scale-105"
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-auto h-full mx-auto"
                  />
                  <div
                    className={`rotate-[-90deg] text-xs ${book.font} ${book.textColor} ${book.margin} font text-center whitespace-nowrap z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
                  >
                    {book.title}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => paginate('right')}
            className="absolute z-20 p-2 text-gray-600 bg-white rounded-full shadow-md opacity-90 hover:opacity-60 right-9 dark:bg-gray-800 dark:text-white"
          >
            ▶
          </button>
        </div>

        {selectedBook !== null && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              onClick={closeModal}
            ></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                <h3 className="mb-2 text-xl font-bold">
                  {books[selectedBook].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {books[selectedBook].author}
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
      </div>
    </section>
  );
}

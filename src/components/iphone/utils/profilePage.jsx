import { useState } from 'react';

import '../../../styles/AboutMe.css';

import ProfilePic from '../../../assets/profilePic.png';
import BooksSection from './AboutMe/BookSection.jsx';
import MoviesSection from './AboutMe/MovieSection.jsx';
import MusicSection from './AboutMe/MusicSection.jsx';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } w-full h-full overflow-x-hidden overflow-hidden bg-white dark:bg-gray-900 `}
    >
      <div className="w-full h-full bg-white dark:bg-gray-900 ">
        <div
          className="w-full max-w-[430px] mx-auto px-4 py-8 font-sans text-gray-900 dark:text-white transition-colors duration-500"
          style={{ height: '850px' }}
        >
          <div
            className={`w-full h-full ${
              expanded ? 'overflow-y-auto' : 'overflow-hidden'
            }`}
          >
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-start justify-between mt-3">
                <h1 className="text-4xl font-bold">Ben Limpic</h1>
                <button
                  onClick={toggleTheme}
                  className="transition bg-gray-800 border rounded-full w-7 h-7 dark:border-gray-900 dark:bg-gray-600 hover:bg-white dark:hover:bg-gray-900 dark:hover:border-gray-600"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Full Stack Web Developer & Designer
              </p>
            </header>

            {/* Profile Image */}
            <section className="flex justify-center my-12">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 border-2 border-blue-500 rounded-full hover:bg-blue-500 opacity-30"></div>
                <img
                  src={ProfilePic}
                  alt="Ben Limpic"
                  className="relative z-10 object-cover w-40 h-40 border-4 border-blue-500 rounded-full shadow-lg hover:opacity-75"
                />
              </div>
            </section>

            {/* Short Bio */}
            <section className="px-4 py-2 mb-8 rounded-lg bg-slate-200 dark:bg-slate-800">
              <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
              <p className="text-lg leading-relaxed">
                I’m a Full Stack Web Developer and Graphic Designer based in San
                Diego, California — a third-generation native of the city. I run
                my own company, W3B//D3V, building digital products for clients
                across medical, defense, education, and e-commerce industries.
              </p>

              {!expanded && (
                <button
                  onClick={toggleExpand}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  More About Me →
                </button>
              )}
            </section>

            {/* Expandable Section */}
            {expanded && (
              <>
                <MusicSection />
                <BooksSection />
                <MoviesSection />
                {/* <TVSection /> */}

                <button
                  onClick={toggleExpand}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  ← Show Less
                </button>
              </>
            )}

            {/* Contact */}
            <footer className="mt-8 mb-10 text-sm text-center text-gray-500 dark:text-gray-400">
              📧 ben@example.com | 🔗 LinkedIn | 💻 GitHub
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

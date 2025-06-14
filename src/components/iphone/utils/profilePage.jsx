import { useState } from 'react';

import '../../../styles/AboutMe.css';

import ProfilePic from '../../../assets/profilePic.png';
import BooksSection from './AboutMe/BookSection.jsx';
import MoviesSection from './AboutMe/MovieSection.jsx';
import MusicSection from './AboutMe/MusicSection.jsx';
import TVSection from './AboutMe/TVSection.jsx';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } h-full overflow-y-auto scrollbar-none`}
    >
      <div className="min-h-screen px-6 py-8 overflow-y-auto font-sans text-gray-900 transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Ben Limpic</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Full Stack Web Developer & Designer
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 transition bg-gray-100 border rounded dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            <a
              href="/BenLimpic_Resume.pdf"
              download
              className="px-3 py-1 text-white transition bg-blue-600 border rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </header>

        {/* Profile Image */}
        <section className="flex justify-center mb-10">
          <img
            src={ProfilePic}
            alt="Ben Limpic"
            className="object-cover w-40 h-40 border-4 border-blue-500 rounded-full"
          />
        </section>

        {/* Short Bio */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            I’m a Full Stack Web Developer and Graphic Designer based in San
            Diego, California — a third-generation native of the city. I run my
            own company, W3B//D3V, building digital products for clients across
            medical, defense, education, and e-commerce industries.
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
            {/* <section className="mb-16">
              <p className="max-w-3xl text-lg leading-relaxed">
                With 13 years in digital media and 5 years focused on full-stack
                development, I specialize in solving novel problems through
                system design, creative problem solving, and intuitive front-end
                development. I thrive at the intersection of architecture,
                design, and problem solving.
              </p>
            </section> */}

            {/* <ProjectsSection /> */}
            {/* <InterestsSection /> */}
            <MusicSection />
            <BooksSection />
            <MoviesSection />
            <TVSection />
            {/* <TravelSection /> */}

            <button
              onClick={toggleExpand}
              className="mt-4 text-blue-600 hover:underline"
            >
              ← Show Less
            </button>
          </>
        )}

        {/* Contact */}
        <footer className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
          📧 ben@example.com | 🔗 LinkedIn | 💻 GitHub
        </footer>
      </div>
    </div>
  );
}

import { useState } from 'react';

import '../../../styles/App.css';

import ProfilePic from '../../../assets/profilePic.png';
import BooksSection from './AboutMe/BookSection.jsx';
import MoviesSection from './AboutMe/MovieSection.jsx';
import MusicSection from './AboutMe/MusicSection.jsx';

import awsIcon from '../../../assets/svg/aws_light.svg';
import javaIcon from '../../../assets/svg/java (1).svg';
import javaScriptIcon from '../../../assets/svg/javaScript (1).svg';
import nodeIcon from '../../../assets/svg/nodejs.svg';
import postgresIcon from '../../../assets/svg/postgresql (1).svg';
import reactIcon from '../../../assets/svg/react_light.svg';
import springIcon from '../../../assets/svg/spring.svg';
import tailwindIcon from '../../../assets/svg/tailwindcss (1).svg';
import viteIcon from '../../../assets/svg/vitejs.svg';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div
        className={`${
          expanded ? 'h-full overflow-y-auto' : 'h-full overflow-hidden'
        } transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <div className="max-w-md px-6 pt-10 pb-8 mx-auto font-sans">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">Ben Limpic</h1>
              <button
                onClick={toggleTheme}
                className="w-8 h-8 text-lg transition bg-gray-100 border rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Full Stack Web Developer & Designer
            </p>
          </header>

          {/* Profile Image */}
          <section className="flex flex-col items-center mb-8">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 transition border-2 border-blue-500 rounded-full hover:bg-blue-500 opacity-30"></div>
              <img
                src={ProfilePic}
                alt="Ben Limpic"
                className="relative z-10 object-cover w-40 h-40 transition border-4 border-blue-500 rounded-full shadow-lg hover:opacity-80"
              />
            </div>

            <div className="mt-8 text-xs text-center text-gray-500 dark:text-gray-400">
              <p>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/benlimpic"
                  className="hover:underline"
                >
                  🔗 LinkedIn
                </a>{' '}
                |{' '}
                <a
                  target="_blank"
                  href="https://github.com/benlimpic"
                  className="hover:underline"
                >
                  💻 GitHub
                </a>{' '}
                |{' '}
                <a
                  target="_blank"
                  href="mailto:benlimpic@gmail.com"
                  className="hover:underline"
                >
                  📧 benlimpic@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* About Me */}

          <section className="px-4 py-4 mb-8 rounded-lg bg-slate-100 dark:bg-slate-700">
            <h2 className="mb-3 text-2xl font-semibold">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">
              Full Stack Software Engineer with 5 years of experience developing
              scalable SaaS platforms and web applications, along with 8 years
              in web design, branding, and digital content. Skilled in Java,
              JavaScript, TypeScript, Spring Boot, React.js, Node.js, and secure
              system design. Proven ability to deliver enterprise-grade software
              in close collaboration with clients and cross-functional teams.
            </p>

            {!expanded && (
              <button
                onClick={toggleExpand}
                className="mt-4 text-sm font-medium text-blue-600 hover:underline"
              >
                More About Me →
              </button>
            )}
          </section>

          {/* Expanded Sections */}
          {expanded && (
            <>
              <section className="px-4 py-4 mb-8 rounded-lg bg-slate-100 dark:bg-slate-800">
                <h2 className="mb-4 text-2xl font-semibold">My Recent Stack</h2>

                <div className="overflow-x-auto">
                  <div className="flex space-x-4 w-max animate-scroll">
                    {[
                      { label: 'Java', icon: javaIcon },
                      { label: 'JavaScript', icon: javaScriptIcon },
                      { label: 'React.js', icon: reactIcon },
                      { label: 'Vite', icon: viteIcon },
                      { label: 'Node.js', icon: nodeIcon },
                      { label: 'Spring Boot', icon: springIcon },
                      { label: 'AWS', icon: awsIcon },
                      { label: 'TailwindCSS', icon: tailwindIcon },
                      { label: 'PostgreSQL', icon: postgresIcon },
                      { label: 'Java', icon: javaIcon },
                      { label: 'JavaScript', icon: javaScriptIcon },
                      { label: 'React.js', icon: reactIcon },
                      { label: 'Vite', icon: viteIcon },
                      { label: 'Node.js', icon: nodeIcon },
                      { label: 'Spring Boot', icon: springIcon },
                      { label: 'AWS', icon: awsIcon },
                      { label: 'TailwindCSS', icon: tailwindIcon },
                      { label: 'PostgreSQL', icon: postgresIcon },
                      { label: 'Java', icon: javaIcon },
                      { label: 'JavaScript', icon: javaScriptIcon },
                      { label: 'React.js', icon: reactIcon },
                      { label: 'Vite', icon: viteIcon },
                      { label: 'Node.js', icon: nodeIcon },
                      { label: 'Spring Boot', icon: springIcon },
                      { label: 'AWS', icon: awsIcon },
                      { label: 'TailwindCSS', icon: tailwindIcon },
                      { label: 'PostgreSQL', icon: postgresIcon },
                      { label: 'Java', icon: javaIcon },
                      { label: 'JavaScript', icon: javaScriptIcon },
                      { label: 'React.js', icon: reactIcon },
                      { label: 'Vite', icon: viteIcon },
                      { label: 'Node.js', icon: nodeIcon },
                      { label: 'Spring Boot', icon: springIcon },
                      { label: 'AWS', icon: awsIcon },
                      { label: 'TailwindCSS', icon: tailwindIcon },
                      { label: 'PostgreSQL', icon: postgresIcon },
                      { label: 'Java', icon: javaIcon },
                      { label: 'JavaScript', icon: javaScriptIcon },
                      { label: 'React.js', icon: reactIcon },
                      { label: 'Vite', icon: viteIcon },
                      { label: 'Node.js', icon: nodeIcon },
                      { label: 'Spring Boot', icon: springIcon },
                      { label: 'AWS', icon: awsIcon },
                      { label: 'TailwindCSS', icon: tailwindIcon },
                      { label: 'PostgreSQL', icon: postgresIcon },
                    ].map(({ label, icon }) => (
                      <div
                        key={label}
                        className="inline-flex items-center flex-shrink-0 px-3 py-1 space-x-2 text-sm bg-white rounded shadow dark:bg-gray-700 dark:text-white"
                      >
                        <img src={icon} alt={label} className="w-5 h-5" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="px-4 py-4 mb-8 rounded-lg bg-slate-100 dark:bg-slate-700">
                <h2 className="mb-3 text-2xl font-semibold">
                  Plans for the Future
                </h2>
                <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">
                  While freelancing has been a rewarding journey, I’m now
                  focused on joining a collaborative team where I can contribute
                  to ambitious, impactful projects. I’m eager to grow alongside
                  other engineers, tackle challenging problems, and play a role
                  in building scalable, user-focused products. Whether it's
                  refining back-end systems or shaping intuitive front-end
                  experiences, I'm ready to take the next step in my career with
                  purpose and passion.
                </p>
              </section>

              <MusicSection />
              <BooksSection />
              <MoviesSection />

              {/* Optional: Fun facts */}

              <button
                onClick={toggleExpand}
                className="block mt-6 text-sm font-medium text-blue-600 hover:underline"
              >
                ← Show Less
              </button>
            </>
          )}

          {/* Footer */}
          <footer className="mt-10 text-xs text-center text-gray-500 dark:text-gray-400">
            <p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/benlimpic"
                className="hover:underline"
              >
                🔗 LinkedIn
              </a>{' '}
              |{' '}
              <a
                target="_blank"
                href="https://github.com/benlimpic"
                className="hover:underline"
              >
                💻 GitHub
              </a>{' '}
              |{' '}
              <a
                target="_blank"
                href="mailto:benlimpic@gmail.com"
                className="hover:underline"
              >
                📧 benlimpic@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

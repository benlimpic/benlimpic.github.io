import { useState } from 'react';

export default function ProfilePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } h-full overflow-y-auto scrollbar-none`}
    >
      <div className="min-h-screen px-6 py-8 overflow-y-auto font-sans text-gray-900 transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Ben Limpic</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Full-Stack Software Engineer
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
              href="/BenLimpic_Resume.pdf" // <-- Put your actual resume path here
              download
              className="px-3 py-1 text-white transition bg-blue-600 border rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </header>

        <section className="flex justify-center mb-10">
          <img
            src="/profile.jpg" // <-- Your profile image path
            alt="Ben Limpic"
            className="object-cover w-40 h-40 border-4 border-blue-500 rounded-full"
          />
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold">About Me</h2>
          <p className="max-w-3xl text-lg leading-relaxed">
            I’m a full-stack developer with expertise in React, Java, Spring
            Boot, API integrations, modern UI/UX design, and scalable cloud
            deployments. Passionate about building elegant, functional software.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 transition border rounded-lg shadow hover:shadow-lg">
              <h3 className="mb-2 text-xl font-bold">Media Collection App</h3>
              <p>React + Spring Boot + Spotify API integration.</p>
              <a
                href="#"
                className="inline-block mt-2 text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>

            {/* Add more project cards here */}
          </div>
        </section>

        <footer className="text-sm text-center text-gray-500 dark:text-gray-400">
          📧 ben@example.com | 🔗 LinkedIn | 💻 GitHub
        </footer>
      </div>
    </div>
  );
}

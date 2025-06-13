export default function ResumePage() {
  return (
    <div className="h-full overflow-y-auto no-scrollbar">
      <div className="min-h-full px-6 py-10 font-sans text-gray-900 transition-colors duration-500 bg-white dark:bg-gray-900 dark:text-white">
        <div className="flex justify-end mb-8">
          <a
            href="/BenLimpic_Resume.pdf"
            download
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Download PDF
          </a>
        </div>

        <section className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          📍 San Diego, CA | 📧 ben@example.com | 🔗 LinkedIn | 💻 GitHub
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Experience</h2>

          <div className="mb-6">
            <h3 className="font-bold">Founder & Lead Engineer — W3B//D3V</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2018 — Present
            </p>
            <ul className="mt-2 ml-6 space-y-1 list-disc">
              <li>
                Built full-stack applications with React, Spring Boot,
                PostgreSQL, and AWS.
              </li>
              <li>
                Designed scalable APIs and cloud-native backend infrastructure.
              </li>
              <li>
                Led software design, architecture, and deployment strategy for
                multiple clients.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Software Engineer — Freelance</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2015 — 2018
            </p>
            <ul className="mt-2 ml-6 space-y-1 list-disc">
              <li>Developed responsive web apps and e-commerce platforms.</li>
              <li>
                Integrated third-party APIs (Spotify, Google Books, AWS S3).
              </li>
              <li>Managed full-stack projects from design to deployment.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Technical Skills</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              'React',
              'Java',
              'Spring Boot',
              'PostgreSQL',
              'AWS',
              'API Integrations',
              'UI/UX',
              'Heroku',
              'Git',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-gray-100 rounded dark:bg-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Education</h2>
          <p>BS in Computer Science — University of XYZ (2010 — 2014)</p>
        </section>
      </div>
    </div>
  );
}

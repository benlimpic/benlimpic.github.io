export default function ResumePage() {
  return (
    <div className="h-full overflow-y-auto text-gray-900 bg-gray-100 no-scrollbar dark:bg-gray-950 dark:text-white">
      <div className="max-w-2xl px-6 py-10 mx-auto font-sans">
        <div className="flex justify-end mb-8">
          <a
            href="/assets/Ben_Limpic_Full_Stack_Engineer (1).pdf"
            download
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Download PDF
          </a>
        </div>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h1 className="text-3xl font-bold">Ben Limpic</h1>
          <p className="text-lg font-medium">Full Stack Software Engineer</p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            San Diego, CA · Open to Remote
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            760-855-5171 · benlimpic@gmail.com
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/benlimpic"
              className="text-blue-600 dark:text-blue-400"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/benlimpic"
              className="text-blue-600 dark:text-blue-400"
            >
              GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://portfolio.benlimpic.info/"
              className="text-blue-600 dark:text-blue-400"
            >
              Portfolio
            </a>
          </p>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">SUMMARY</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>
          <p className="text-sm leading-relaxed">
            Full Stack Software Engineer with 5 years of experience developing
            scalable SaaS platforms and web applications, along with 8 years in
            web design, branding, and digital content. Skilled in Java,
            JavaScript, TypeScript, Spring Boot, React.js, Node.js, and secure
            system design. Proven ability to deliver enterprise-grade software
            in close collaboration with clients and cross-functional teams.
          </p>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">TECHNICAL SKILLS</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>
          <div className="space-y-6 text-sm text-gray-800 dark:text-gray-100">
            {[
              ['Languages', 'Java, JavaScript, TypeScript, Ruby'],
              [
                'Frameworks & Libraries',
                'Spring Boot, React.js, Node.js, Ruby on Rails, Thymeleaf, Tailwind CSS, Bootstrap',
              ],
              ['Cloud & DevOps', 'AWS, GitHub'],
              ['Databases', 'PostgreSQL, MySQL'],
              ['Testing', 'JUnit, Jest, React Testing Library'],
              ['Security', 'Spring Security, JWT, OAuth'],
              [
                'Web & Design',
                'Canva, Figma, Squarespace, WordPress, Adobe Creative Suite',
              ],
            ].map(([title, items], i) => (
              <div
                key={title}
                className={
                  i !== 0
                    ? 'pt-4 border-t border-gray-200 dark:border-gray-800'
                    : ''
                }
              >
                <h3 className="font-semibold tracking-wide text-gray-600 uppercase dark:text-gray-400 text-ms">
                  {title}
                </h3>
                <p className="mt-1">{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">PROJECTS</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>

          <div className="mb-6">
            <h3 className="font-bold">Shelved</h3>
            <h3 className="text-sm font-thin">
              Visual Media Collection Platform
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a
                href="https://shelved-demo-app.benlimpic.info"
                className="text-blue-600 dark:text-blue-400"
              >
                Demo
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/benlimpic/Shelved_App"
                className="text-blue-600 dark:text-blue-400"
              >
                Code
              </a>
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>
                Built a full-stack platform to organize and showcase media
                collections.
              </li>
              <li>Java, Spring Boot backend with PostgreSQL data models.</li>
              <li>Integrated AWS S3 for secure cloud media storage.</li>
              <li>Spring Security + JWT for authentication.</li>
              <li>Frontend built with Thymeleaf and Tailwind CSS.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800"></div>

          <div>
            <h3 className="font-bold">Lockbox</h3>
            <h3 className="text-sm font-thin">
              SaaS Master Key System Management
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a
                href="https://shelved-demo-app.benlimpic.info"
                className="text-blue-600 dark:text-blue-400"
              >
                Demo
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/benlimpic/lockbox-V1-frontend"
                className="text-blue-600 dark:text-blue-400"
              >
                Frontend
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/benlimpic/lockbox-V1-backend"
                className="text-blue-600 dark:text-blue-400"
              >
                Backend
              </a>
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>Custom SaaS app for managing master key systems at scale.</li>
              <li>React frontend optimized for 5,000+ data points.</li>
              <li>Backend in Ruby on Rails + PostgreSQL.</li>
              <li>OAuth-secured API with live sync logic.</li>
              <li>Bootstrap-based mobile-friendly UI.</li>
            </ul>
          </div>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">PROF EXPERIENCE</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>

          <div className="mb-6">
            <h3 className="font-bold">W3B//D3V</h3>
            <p className="text-gray-800 text-md dark:text-gray-400">
              Full Stack Developer
            </p>
            <h3 className="text-sm font-thin">San Diego, CA</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jan 2021 – Present
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>Custom-built apps for 5–10 clients in various industries.</li>
              <li>Spring Boot, React.js, Rails, PostgreSQL/MySQL, AWS.</li>
              <li>Test-driven approach using Jest, JUnit, and RTL.</li>
              <li>
                50% increase in client acquisition via polished UX & docs.
              </li>
              <li>Agile team workflows with CI/CD integration.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800"></div>

          <div>
            <h3 className="font-bold">Brighten Creative</h3>
            <p className="text-gray-800 text-md dark:text-gray-400">
              Web Designer & Developer
            </p>
            <h3 className="text-sm font-thin">San Luis Obispo, CA</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sep 2017 – Jan 2021
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>
                Designed and built websites for 10–20 clients simultaneously.
              </li>
              <li>Managed hosting, CMS, and custom frontend dev.</li>
              <li>
                Created visual assets using Adobe Suite, Figma, and Canva.
              </li>
              <li>Led UI/UX direction for branding and marketing alignment.</li>
            </ul>
          </div>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">ADDITIONAL EXPERIENCE</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>
          <div className="mb-6">
            <h3 className="font-bold">Roll Digital</h3>
            <p className="text-gray-800 text-md dark:text-gray-400">
              Communications Manager
            </p>
            <h3 className="text-sm font-thin">Sacramento, CA</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jun 2015 – Sep 2017
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>Designed retention-focused drip campaigns.</li>
              <li>Presented results in executive strategy meetings.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800"></div>

          <div>
            <h3 className="font-bold">Family Care Network</h3>
            <p className="text-gray-800 text-md dark:text-gray-400">
              Multimedia Coordinator
            </p>
            <h3 className="text-sm font-thin">San Luis Obispo, CA</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dec 2012 – Jun 2015
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-sm list-disc">
              <li>Produced 10–20 professional video projects annually.</li>
              <li>Presented marketing assets to board leadership.</li>
            </ul>
          </div>
        </section>

        <section className="p-6 mb-10 shadow-md bg-white/90 rounded-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
          <h2 className="text-xl font-semibold">EDUCATION</h2>
          <div className="mb-4 border-t-4 border-slate-400 "></div>
          <div className="mb-4">
            <p className="font-bold">Flatiron School</p>

            <p className="font-thin">Full-Stack Software Engineering</p>
            <ul className="ml-4 space-y-1 text-sm list-disc">
              <li>Certificate · 525 hours</li>
              <li>JavaScript, React.js, Ruby on Rails, PostgreSQL</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800"></div>

          <div>
            <p className="font-bold">Palomar College</p>
            <p className="font-thin">Graphic Arts & Marketing</p>
            <ul className="ml-4 space-y-1 text-sm list-disc">
              <li>Adobe Creative Suite, Digital Marketing, Web Strategy</li>
            </ul>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/benlimpic"
              className="text-blue-600 dark:text-blue-400"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/benlimpic"
              className="text-blue-600 dark:text-blue-400"
            >
              GitHub
            </a>{' '}
            |{' '}
            <a
              href="https://portfolio.benlimpic.info/"
              className="text-blue-600 dark:text-blue-400"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

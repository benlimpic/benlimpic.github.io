export default function ProjectsSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-4 text-2xl font-semibold">Projects</h2>

      <div className="p-6 mb-6 transition border rounded-lg shadow hover:shadow-lg">
        <h3 className="mb-2 text-xl font-bold">Shelved</h3>
        <p>
          A social network centered around creating and sharing collections of
          things users love.
        </p>
      </div>

      <div className="p-6 mb-6 transition border rounded-lg shadow hover:shadow-lg">
        <h3 className="mb-2 text-xl font-bold">Music Catalog</h3>
        <p>
          Released 30+ original songs across streaming platforms, toured the US
          & UK, and performed in a feature film.
        </p>
      </div>
    </section>
  );
}
